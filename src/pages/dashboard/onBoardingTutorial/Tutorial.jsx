// import * as React from "react";
import { Button, Checkbox, Grid, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import dum1 from "./../../../../src/assets/Screen1.png";
import dum2 from "./../../../../src/assets/Screen3.png";
import dum3 from "./../../../../src/assets/Screen1.png";

export default function Tutorial() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1100,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [counter, setCounter] = useState(1);

  const [isSkip, setIsSkip] = useState(false);
  const handelNext = () => {
    if (counter <= 3) {
      setCounter(counter + 1);
    }
  };

  const handelBack = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isChecked, setIsChecked] = useState({
    customerRating1: false,
    customerRating2: false,
    customerRating3: false,
    customerRating4: false,
    customerRating5: false,
    customerRating6: false,
  });
  // console.log(isChecked.customerRating1);
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            {!isSkip ? (
              <Grid className="ht-100vh p-10" item xs={4}>
                <div>
                  <div class="stepper">
                    <div class="steps">
                      <a onClick={() => setCounter(1)} class="step">
                        <span
                          class="icon"
                          style={{
                            backgroundColor: counter >= 1 ? "#1C1C1CB2" : "",
                          }}
                        ></span>
                      </a>
                      <a onClick={() => setCounter(2)} class="step">
                        <span
                          class="icon"
                          style={{
                            backgroundColor: counter >= 2 ? "#1C1C1CB2" : "",
                          }}
                        ></span>
                      </a>

                      <a onClick={() => setCounter(3)} class="step">
                        <span
                          class="icon"
                          style={{
                            backgroundColor: counter >= 3 ? "#1C1C1CB2" : "",
                          }}
                        ></span>
                      </a>
                      <a onClick={() => setCounter(4)} class="step">
                        <span
                          class="icon"
                          style={{
                            backgroundColor: counter >= 4 ? "#1C1C1CB2" : "",
                          }}
                        ></span>
                      </a>
                    </div>
                    {counter === 1 ? (
                      <Box>
                        <Box>MEET YOUR WORKSPACE </Box>

                        <Box className="main_title">Provider Summary</Box>
                        <ul className="mt-20 px-30">
                          <li className="sub_title">
                            Assess Provider information in a side-by-side view
                            or full screen focus view Choose parameters that
                            align with you needs, or opt for our recommended set
                          </li>
                        </ul>
                      </Box>
                    ) : (
                      ""
                    )}

                    {counter === 2 ? (
                      <Box>
                        <Box>MEET YOUR WORKSPACE </Box>

                        <Box className="main_title">Action Panel</Box>
                        <Box className="sub_title">
                          Keep everything at your fingertips with the Action
                          Panel.
                        </Box>
                        <Box className="sub_title">Copilot</Box>
                        <Box className="sub_title">
                          Discuss details, get guidance, or seek advice
                        </Box>
                        <Box className="sub_title">knowledge Assets</Box>
                        <Box className="sub_title">
                          Capture Key points and reminders and essential
                          resources
                        </Box>
                      </Box>
                    ) : (
                      ""
                    )}

                    {counter === 3 ? (
                      <Box>
                        <Box>@ second tab </Box>

                        <Box className="main_title">
                          Day-1 Readiness Checklist
                        </Box>
                        <Box className="sub_title">
                          Streamline success with our customizable checklist.
                        </Box>
                        <Box>
                          Streamline success with our customizable checklist.
                        </Box>
                      </Box>
                    ) : (
                      ""
                    )}

                    {counter === 4 ? (
                      <Box>
                        <Box>@ third tab </Box>

                        <Box className="main_title">
                          Day-1 Readiness Checklist
                        </Box>
                        <Box className="sub_title">
                          Streamline success with our customizable checklist.
                        </Box>
                        <Box>
                          Streamline success with our customizable checklist.
                        </Box>
                      </Box>
                    ) : (
                      ""
                    )}

                    <div class="buttons">
                      <Box>
                        {counter === 4 ? (
                          ""
                        ) : (
                          <button
                            class="btn step-complete skip_btn"
                            onClick={() => {
                              setCounter(5);
                              setIsSkip(true);
                            }}
                          >
                            Skip
                          </button>
                        )}
                      </Box>
                      <Box class="gap-10">
                        {counter === 1 ? (
                          ""
                        ) : (
                          <button
                            onClick={handelBack}
                            class="btn back_btn step-back"
                          >
                            Back
                          </button>
                        )}

                        {counter === 4 ? (
                          ""
                        ) : (
                          <button
                            onClick={handelNext}
                            class="btn yell_btn step-next"
                          >
                            Next
                          </button>
                        )}
                        {counter === 4 ? (
                          <button
                            class="btn step-complete yell_btn"
                            onClick={() => {
                              setCounter(5);
                              setIsSkip(true);
                            }}
                          >
                            Build work place
                          </button>
                        ) : (
                          ""
                        )}
                      </Box>
                    </div>
                  </div>
                </div>
              </Grid>
            ) : (
              ""
            )}

            {counter === 1 ? (
              <Grid
                sx={{ background: "#EAECF0" }}
                className="ht-100vh flex-center"
                item
                xs={8}
              >
                <Box>
                  <img className="img-responsive" src={dum1} alt="dum1"></img>
                </Box>
              </Grid>
            ) : (
              ""
            )}
            {counter === 2 ? (
              <Grid
                sx={{ background: "#EAECF0" }}
                className="ht-100vh flex-center"
                item
                xs={8}
              >
                <Box>
                  <img className="img-responsive" src={dum2} alt="dum1"></img>
                </Box>
              </Grid>
            ) : (
              ""
            )}
            {counter === 3 ? (
              <Grid
                sx={{ background: "#EAECF0" }}
                className="ht-100vh flex-center"
                item
                xs={8}
              >
                <Box>
                  <img className="img-responsive" src={dum3} alt="dum1"></img>
                </Box>
              </Grid>
            ) : (
              ""
            )}
            {counter === 4 ? (
              <Grid
                sx={{ background: "#EAECF0" }}
                className="ht-100vh flex-center"
                item
                xs={8}
              >
                <Box>
                  <img className="img-responsive" src={dum2} alt="dum1"></img>
                </Box>
              </Grid>
            ) : (
              ""
            )}
            {counter === 5 ? (
              <Grid
                sx={{ background: "#EAECF0" }}
                className="ht-100vh flex-center"
                item
                xs={12}
              >
                <Box>
                  <Box>
                    <Box>
                      <Box className="text-center">
                        Build your Provider Comparison View{" "}
                      </Box>
                      <Box className="text-center">
                        Choose What is important for you
                      </Box>
                      <br /> <br /> <br />
                      <Box className="text-center">
                        Choose What is important for you
                      </Box>
                      <br /> <br />
                      <Box className="flex-center gap-10 mt-10">
                        <Box
                          className={`${
                            isChecked.customerRating1
                              ? "checkBoxBorderBlack"
                              : "checkBoxBorder"
                          }`}
                        >
                          <Box className="flex-center">
                            <Checkbox
                              onClick={(e) =>
                                setIsChecked({
                                  ...isChecked,
                                  customerRating1: e.target.checked,
                                })
                              }
                            />
                            <Box
                              className={`${
                                isChecked.customerRating1
                                  ? "text-white"
                                  : "text-black"
                              }`}
                            >
                              Customer Rating
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          className={`${
                            isChecked.customerRating2
                              ? "checkBoxBorderBlack"
                              : "checkBoxBorder"
                          }`}
                        >
                          <Box className="flex-center">
                            <Checkbox
                              onClick={(e) =>
                                setIsChecked({
                                  ...isChecked,
                                  customerRating2: e.target.checked,
                                })
                              }
                            />
                            <Box
                              className={`${
                                isChecked.customerRating2
                                  ? "text-white"
                                  : "text-black"
                              }`}
                            >
                              Customer Rating
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          className={`${
                            isChecked.customerRating3
                              ? "checkBoxBorderBlack"
                              : "checkBoxBorder"
                          }`}
                        >
                          <Box className="flex-center">
                            <Checkbox
                              onClick={(e) =>
                                setIsChecked({
                                  ...isChecked,
                                  customerRating3: e.target.checked,
                                })
                              }
                            />
                            <Box
                              className={`${
                                isChecked.customerRating3
                                  ? "text-white"
                                  : "text-black"
                              }`}
                            >
                              Customer Rating
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="flex-center gap-10 mt-10">
                        <Box
                          className={`${
                            isChecked.customerRating4
                              ? "checkBoxBorderBlack"
                              : "checkBoxBorder"
                          }`}
                        >
                          <Box className="flex-center">
                            <Checkbox
                              onClick={(e) =>
                                setIsChecked({
                                  ...isChecked,
                                  customerRating4: e.target.checked,
                                })
                              }
                            />
                            <Box
                              className={`${
                                isChecked.customerRating4
                                  ? "text-white"
                                  : "text-black"
                              }`}
                            >
                              Customer Rating
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          className={`${
                            isChecked.customerRating5
                              ? "checkBoxBorderBlack"
                              : "checkBoxBorder"
                          }`}
                        >
                          <Box className="flex-center">
                            <Checkbox
                              onClick={(e) =>
                                setIsChecked({
                                  ...isChecked,
                                  customerRating5: e.target.checked,
                                })
                              }
                            />
                            <Box
                              className={`${
                                isChecked.customerRating5
                                  ? "text-white"
                                  : "text-black"
                              }`}
                            >
                              Customer Rating
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          className={`${
                            isChecked.customerRating6
                              ? "checkBoxBorderBlack"
                              : "checkBoxBorder"
                          }`}
                        >
                          <Box className="flex-center">
                            <Checkbox
                              onClick={(e) =>
                                setIsChecked({
                                  ...isChecked,
                                  customerRating6: e.target.checked,
                                })
                              }
                            />
                            <Box
                              className={`${
                                isChecked.customerRating6
                                  ? "text-white "
                                  : "text-black"
                              }`}
                            >
                              Customer Rating
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="or">OR</Box>
                      <Box>
                        Began with Trmeric curated suggesstion. Configure
                        anything to fit your needs.
                      </Box>
                      <Box className="flex-center">
                        <Box className="checkBoxBorder mt-20">
                          Star with our picks
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="mt-10 pb-20 flex-end gap-10">
                    {counter === 1 ? (
                      ""
                    ) : (
                      <button
                        onClick={() => {
                          setCounter(1);
                          setIsSkip(false);
                        }}
                        class="btn step-back back_btn"
                      >
                        Back
                      </button>
                    )}
                    <button onClick={handelNext} class="btn yell_btn step-next">
                      Get Started
                    </button>
                  </Box>
                </Box>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
