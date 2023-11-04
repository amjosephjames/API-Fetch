import React,{useState, useEffect} from "react";
import styled from "styled-components";

const Homescreen = () => {
    const url1 = "https://jsonplaceholder.typicode.com/photos";

    const [user, setUser] = useState([])
    const [name, setName] = useState("")

    const url = `https://api.github.com/users/${name}`;

      const fetchData = async () => {
        await fetch(url)
          .then((res) => res.json())
          .then((data) => setUser(data));

        console.log("user: ", user);
        console.log(url, name);
      };

      useEffect(() => {
        fetchData();
      }, [user]);
  return (
    <Container>
      <Wrapper>
        <Top>
          <input
            type="text"
            placeholder="Enter your Github"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            onClick={() => {
              fetchData();
            }}
          >
            Submit
          </button>
        </Top>
        <Card>
          <p>{user.login}</p>
          <img 
           src={user.avatar_url}
          />
        </Card>
      </Wrapper>
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Top = styled.div`
  width: 500px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #020c1b;
  }
  button {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #020c1b;
    border-radius: 5px;
    color: white;
    font-size: 14px;
  }
`;
const Card = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  p{
    font-size:14px;
  }

  img {
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
    margin-top: 20px;
  }
`;
