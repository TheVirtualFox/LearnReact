import React,{useState,useEffect} from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
        setDebouncedTerm(term);
    }, 1000);

    return () => {
        clearTimeout(timerId);
    }
  }, [term]);

  useEffect(() => {
      const search = async () => {
          const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
              params: {
                  action: "query",
                  list: "search",
                  origin: "*",
                  format: "json",
                  srsearch: debouncedTerm
              }
          });
          if (data.query) {
              setResults(data.query.search);
          }
      };
      search();
  }, [debouncedTerm])


  console.log(results);

  /*
  useEffect(() => {
    const search = async () => {
        const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
            params: {
                action: "query",
                list: "search",
                origin: "*",
                format: "json",
                srsearch: term
            }
        });
        setResults(data.query.search);
    };

    if (term && !results.length) {
        search();
    } else {
        const timeoutId = setTimeout(() => {
            if(term) {
                search();
            }
        }, 500 );

        return () => {
            clearTimeout(timeoutId);
        };
    }

  }, [term, results.length]);
   */

  /*
  useEffect(() => {
    console.log("Initial render or term was changed");
    return () => {
        console.log("CLEANUP");
    };
  }, [term]);
  */
  const renderedResults = results.map((result) => {
     return (<div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wkikpedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                 <div className="content">
                     <div className="header">{result.title}</div>
                     <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                 </div>
            </div>);
  });


/*
  console.log("on every render");

  useEffect(() => {
      console.log("Run Only once on init");
  }, []);

  useEffect(() => {
      console.log("after every render and init");
  });

  useEffect(() => {
      console.log("change stat and init");
  }, [term]);
*/
  return (
      <div>
          <div className="ui form">
              <div className="field">
                  <label>Enter Search Term</label>
                  <input
                      onChange={e => setTerm(e.target.value)}
                      value={term}
                      className="input"
                  />
              </div>
          </div>
          <div className="ui celled list">
              {renderedResults}
          </div>
      </div>
  );
};

export default Search;