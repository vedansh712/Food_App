// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Cards from "../components/Cards";
// import Carousel from "../components/Carousel";

// export default function Home() {
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/foodData", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//       });
//       const data = await response.json();

//       setFoodItem(data[0]);
//       setFoodCat(data[1]);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div>
//         <Carousel />
//       </div>
//       <div className="container">
//         {foodCat.length !== 0 &&
//           foodCat.map((catData) => (
//             <div key={catData._id}>
//               <div className="fs-3 m-3">{catData.CategoryName}</div>
//               <hr />
//               {foodItem.length !== 0 ? (
//                 foodItem
//                   .filter((item) => item.CategoryName === catData.CategoryName)
//                   .map((filterItem) => (
//                     <div key={filterItem._id}>
//                       <Cards />
//                     </div>
//                   ))
//               ) : (
//                 <div>no such data</div>
//               )}
//             </div>
//           ))}
//         <Cards />
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
// import Carousel from "../components/Carousel";
// we pass style as an object s we need to put it in {{}}
// {}we use these to write javascript

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [search, setSearch] = useState('');
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0] , response[1])
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{objectFit:"contain !important"}}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner" id="carousel">
      <div className="carousel-caption"  style={{zIndex:"10"}}>
      <div className="d-flex  justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
              />
              {/* <button className="btn btn-outline-success text-white bg-dark" type="submit">
                Search
              </button> */}
            </div>
          </div>
        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/random/900x700/?burger"
            className="d-block w-100" 
            style={{filter:"brightness(30%)"}}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900x700/?cake"
            className="d-block w-100"
            style={{filter:"brightness(30%)"}}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900x700/?paneer"
            className="d-block w-100"
            style={{filter:"brightness(30%)"}}
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      <div className="container">
        {foodCat !== []
          ? foodCat.map((data) => {
              return ( <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr/>
                {foodItem !== []
                ?
              foodItem.filter((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
            .map(filterItem => {
              return (
                <div key={filterItem._id} className="col-12 col-md-6 col-lg-3">
                  <Cards 
                  foodItems ={filterItem}
                  options = {filterItem.options[0]}
                  // description = {filterItem.description}
                  ></Cards>
                </div>
              )
            }
            ): <div> no such data </div>
            }  </div>
              )
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}