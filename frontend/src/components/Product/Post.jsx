import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Post.css";
import "./Games.css";
const Post = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [mileage, setMileage] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [place, setPlace] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [selectedItemId, setSelectedItemId] = useState(null);

  console.log(data);

  const handlename = (event) => {
    setName(event.target.value);
  };

  const handledes = (event) => {
    setDescription(event.target.value);
  };

  const handlemileage = (event) => {
    setMileage(event.target.value);
  };

  const handlecolor = (event) => {
    setColor(event.target.value);
  };

  const handleplace = (event) => {
    setPlace(event.target.value);
  };

  const handleprice = (event) => {
    setPrice(event.target.value);
  };

  const handleimg = (event) => {
    setImage(event.target.value);
  };

  const handlestatus = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      name: name,
      price: price,
      description: description,
      status: status,
      mileage: mileage,
      image: image,
      place: place,
      color: color,
    };
    if (
      name === "" ||
      price === "" ||
      description === "" ||
      status === "" ||
      mileage === "" ||
      image === "" ||
      place === "" ||
      color === ""
    ) {
      alert("Please fill in all the information");
    } else {
      axios
        .post("https://giddy-lime-xerus.cyclic.app/api/g1/games/new", payload)
        .then((res) => {
          alert("New request is added");
        })
        .catch((res) => {
          alert("something went wrong");
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://api.spacexdata.com/v3/launches"); // Replace with your API endpoint
      setData(response.data);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api.spacexdata.com/v3/launches/${id}`);
      fetchData();
    } catch (error) {
      setError("Error deleting data");
    }
  };

  const handleUpdate = (id) => {
    setSelectedItemId(id);
  };

  const handleFormSubmit = async (e, id) => {
    e.preventDefault();
    try {
      const updatedData = {
        name: name,
        price: price,
        description: description,
        status: status,
        mileage: mileage,
        image: image,
        place: place,
        color: color,
      };

      await axios.patch(
        `https://giddy-lime-xerus.cyclic.app/api/g1/games/${id}`,
        updatedData
      ); // Replace with your API endpoint and updated data
      setSelectedItemId(null);
      fetchData(); // Refresh the data after update
    } catch (error) {
      setError("Error updating data");
    }
  };

  return (
    <div>
      <div className="formbox">
        <h1 id="name">ADD CAR</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Brand Name:
            <input type="text" value={name} onChange={handlename} />
          </label>
          <br />
          <label>
            Description:
            <input
              type="description"
              value={description}
              onChange={handledes}
            />
          </label>
          <br />
          <label>
            Image URL:
            <input type="url" value={image} onChange={handleimg} />
          </label>
          <br />
          <label>
            Price:
            <input type="price" value={price} onChange={handleprice} />
          </label>
          <br />

          <label htmlFor="selectTag">Colour</label>
          <select id="selectTag" value={color} onChange={handlecolor}>
            <option value="">Select...</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>

          <label htmlFor="selectTag">Status</label>
          <select id="selectTag" value={status} onChange={handlestatus}>
            <option value="">Select...</option>
            <option value="second-hand">Second-hand</option>
            <option value="brand-new">Brand-new</option>
          </select>

          <br />
          <label htmlFor="selectTag">Mileage</label>
          <select id="selectTag" value={mileage} onChange={handlemileage}>
            <option value="">Select...</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
          <label>
            place:
            <input type="place" value={place} onChange={handleplace} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div></div>
      <div>
        {data &&
          data.map((ele) => (
            <div className="ProductDetails">
              <div>
                <img src={ele.links.mission_patch} alt={ele.name} />
              </div>
              <div className="detailsBlock-1">
                <h1>{ele.mission_name}</h1>
              </div>
              <div className="detailsBlock-2">
                <p>
                  {" "}
                  <strong>Status : </strong>
                  {`${ele.launch_success}`}
                </p>
             
                <p>
                  <strong>Launch Place :</strong> {ele.launch_site.site_name}
                </p>

              
              </div>
              <div>
                <button onClick={() => handleDelete(ele.flight_number)}>Delete</button>
                <button onClick={() => handleUpdate(ele.flight_number)}>Update</button>

                {selectedItemId === ele._id && (
                  <form onSubmit={(e) => handleFormSubmit(e, ele._id)}>
                    <input
                      type="text"
                      value={name}
                      placeholder="Enter Brand-name"
                      onChange={handlename}
                    />

                    <input
                      type="description"
                      value={description}
                      placeholder="Enter Description"
                      onChange={handledes}
                    />

                    <input
                      type="url"
                      value={image}
                      placeholder="Enter URL"
                      onChange={handleimg}
                    />

                    <input
                      type="price"
                      value={price}
                      placeholder="Enter Price"
                      onChange={handleprice}
                    />

                    <select
                      id="selectTag"
                      value={color}
                      placeholder="Enter Colour"
                      onChange={handlecolor}
                    >
                      <option value="">Select...</option>
                      <option value="red">Red</option>
                      <option value="black">Black</option>
                      <option value="white">White</option>
                    </select>

                    <select
                      id="selectTag"
                      placeholder="Enter status"
                      value={status}
                      onChange={handlestatus}
                    >
                      <option value="">Select...</option>
                      <option value="second-hand">Second-hand</option>
                      <option value="brand-new">Brand-new</option>
                    </select>

                    <select
                      id="selectTag"
                      value={mileage}
                      placeholder="Enter Mileage"
                      onChange={handlemileage}
                    >
                      <option value="">Select...</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                    </select>

                    <input
                      type="place"
                      value={place}
                      placeholder="Enter place"
                      onChange={handleplace}
                    />

                    <button type="submit">Submit</button>
                  </form>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Post;
