import React, { useEffect, useState } from "react";

const Display = () => {
  const arrayOfchoices = ["rock", "paper", "scissor"];
  const [computerChoice, setComputerChoice] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [winMessage, setWinMessage] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  useEffect(() => {
    console.log("computerchoice:- ", computerChoice);
    console.log("userschoice:- ", userChoice);
    checkWinner();
  }, [userChoice, computerChoice]);

  //this function is called while we click the button and it calls two more functions
  const handleClick = (userInput) => {
    setUserChoice(userInput);
    setComputerChoice(
      arrayOfchoices[Math.floor(Math.random() * arrayOfchoices.length)]
    );
  };

  const checkWinner = () => {
    if (userChoice === "" && computerChoice === "") {
      setWinMessage("");
    } else if (userChoice === "rock" && computerChoice === "rock") {
      setWinMessage("Match is a tie");
      setImage1("../images/rock.png");
      setImage2("../images/rock.png");
      setShowImage(true);
    } else if (userChoice === "paper" && computerChoice === "paper") {
      setWinMessage("Match is a tie");
      setImage1("../images/paper.png");
      setImage2("../images/paper.png");
      setShowImage(true);
    } else if (userChoice === "scissor" && computerChoice === "scissor") {
      setWinMessage("Match is a tie");
      setImage1("../images/scissor.png");
      setImage2("../images/scissor.png");
      setShowImage(true);
    } else if (userChoice === "rock" && computerChoice === "paper") {
      setWinMessage(
        "You  Lost.......... Your choice:-Rock  Computer choice:- Paper"
      );
      setImage1("../images/rock.png");
      setImage2("../images/paper.png");
      setShowImage(true);
      setComputerScore((prev) => prev + 1);
    } else if (userChoice === "rock" && computerChoice === "scissor") {
      setWinMessage(
        "You Won.......... Your choice:-Rock  Computer choice:- Scissor"
      );
      setImage1("../images/rock.png");
      setImage2("../images/scissor.png");
      setShowImage(true);
      setUserScore((prev) => prev + 1);
    } else if (userChoice === "paper" && computerChoice === "rock") {
      setWinMessage(
        "You Won.......... Your choice:- Paper Computer choice:- Rock"
      );
      setImage1("../images/paper.png");
      setImage2("../images/rock.png");
      setShowImage(true);
      setUserScore((prev) => prev + 1);
    } else if (userChoice === "paper" && computerChoice === "scissor") {
      setWinMessage(
        "You Lost.......... Your choice:- Paper Computer choice:- Scissor"
      );
      setImage1("../images/paper.png");
      setImage2("../images/scissor.png");
      setShowImage(true);
      setComputerScore((prev) => prev + 1);
    } else if (userChoice === "scissor" && computerChoice === "rock") {
      setWinMessage(
        "You Lost.......... Your choice:- Scissor Computer choice:- Rock"
      );
      setImage1("../images/scissor.png");
      setImage2("../images/rock.png");
      setShowImage(true);
      setComputerScore((prev) => prev + 1);
    } else if (userChoice === "scissor" && computerChoice === "paper") {
      setWinMessage(
        "You Won.......... Your choice:- Scissor Computer choice:- Paper"
      );
      setImage1("../images/scissor.png");
      setImage2("../images/paper.png");
      setShowImage(true);
      setUserScore((prev) => prev + 1);
    } else {
      setWinMessage("You Lost..........");
    }
  };

  return (
    <div>
      {/*score board*/}
      <div className="scoreBoard">
        <p>Your Score:- {userScore}</p>
        <p>Computer Score:- {computerScore}</p>
      </div>

      {/*user choice */}
      <div className="buttons">
        <p>Select your choice</p>
        <button onClick={() => handleClick("rock")}>Rock</button>
        <button onClick={() => handleClick("paper")}>Paper</button>
        <button onClick={() => handleClick("scissor")}>Scissor</button>
      </div>
      <div>
        <p>User's choice is {userChoice}</p>
      </div>

      {/* computer choice */}
      <div>
        <p>Computer's choice is {computerChoice}</p>
      </div>

      {/* to show the result*/}
      <div>
        <h1>{winMessage}</h1>
      </div>

      {/* to show the images*/}
      {showImage ? (
        <div className="images">
          <img src={image1} alt="" />
          <img
            src={image2}
            alt=""
            style={{
              transform:
                image2 === "../images/scissor.png" ? "scaleX(-1)" : "none",
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Display;
