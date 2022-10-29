import React , {useState} from "react";

const Search = () => {
    const [data , setData] = useState([])

    const searchHandler = async(e)=>{
      e.preventDefault();
      console.log("XXXXXXXXXXXXX") ;
      const url =  `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem`;
      e.preventDefault();    
     // const data1 = await fetch(url);
      // console.log(data1);
      fetch(url)
        .then((res) => {       
          console.log("XXXXXXXXXXXXX",res) ;
          if (!res.ok) {
            throw Error("something went wrong , try again later" , res);
          }
          return res.json();
        })
        .then((result) => {
          console.log("KKKKKKKKK" , result);
          setData(result);
          // setIsPending(false);
        })
        .catch((error) => {
          console.log("MMMMMMMMMM" , error);
          if (error.name === "AbortError") {
            console.log("error");
          } else {
            // setIsPending(false);
            // setError(error.message);
          }
        });
    }
  return (
    <div className="search">
      <h1>O</h1>
      <div className="search-details">
      <button onClick={searchHandler}>search</button>
        <input type="text" />
        
      </div>
    </div>
  );
};

export default Search;
