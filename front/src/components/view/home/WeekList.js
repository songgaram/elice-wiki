import { useState } from "react";
import { Button, Divider } from "@mui/material";
import styled from "styled-components";

const WeekList = () => {
    const [isClicked, setIsClicked] = useState(new Array(25).fill(false));
    const handleClick = (e) => {
        const newArr = new Array(25).fill(false);
        newArr[e.target.value] = !newArr[e.target.value];
        setIsClicked(newArr);
    };

    return (
        <>
            <WeekNav>
                <Button disabled style={{ color: "black" }}>
                    WEEK
                </Button>

                {new Array(24).fill(null).map((_, idx) => (
                    <>
                        <Button
                            value={idx}
                            key={`week_${idx}`}
                            size="small"
                            variant={isClicked[idx] ? "contained" : "text"}
                            sx={{
                                minWidth: "2.5%",
                                maxHeight: "50%",
                                borderRadius: "30px",
                                margin: "0 3px",
                            }}
                            onClick={handleClick}
                        >
                            {String(idx + 1).padStart(2, "0")}
                        </Button>
                        <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                        />
                    </>
                ))}

                <Button
                    value={24}
                    variant={isClicked[24] ? "contained" : "text"}
                    size="small"
                    sx={{
                        minWidth: "3%",
                        maxHeight: "50%",
                        borderRadius: "30px",
                        margin: "0 3px",
                    }}
                    onClick={handleClick}
                >
                    기타
                </Button>
            </WeekNav>
        </>
    );
};

const WeekNav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #f1f1f1;
`;

export default WeekList;
