import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const wordList = [
  "apple",
  "banana",
  "cat",
  "dog",
  "elephant",
  "funny",
  "good",
  "happy",
  "ice",
  "jacket",
  "korea",
];
const word = wordList[Math.floor(Math.random() * wordList.length)];

function Home() {
  console.log("word:", word);
  const [randomWord, setRandomWord] = useState("Lingobility");

  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        style={{
          marginBottom: 100,
          color: "#7CA352",
          fontFamily: "Concert One",
        }}
      >
        Practice Words
      </Typography>
      <Box textAlign="center" mb={5}>
        <Button
          variant="contained"
          size="large"
          onClick={() =>
            setRandomWord(wordList[Math.floor(Math.random() * wordList.length)])
          }
        >
          Generate new word!
        </Button>
      </Box>
      <Typography variant="body1" align="center">
        Your chosen word is {randomWord}! How well do you know this word??
      </Typography>

      <Box textAlign="center" mb={5}>
        <Typography component="legend"> </Typography>
        <Rating name="rating1" defaultValue={2} max={10} precision={0.5} />
          
      
      
      </Box>
      <Box textAlign="center" mb={5}>
        <Button
            variant="contained"
            size="large"
            onClick={() =>
              
              alert("Submitted!")
            }
          >
            Submit Rating
          </Button>
      </Box>
    </div>
  );
}

export default Home;
