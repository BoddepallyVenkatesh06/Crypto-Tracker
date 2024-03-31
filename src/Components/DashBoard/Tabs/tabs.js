import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "./styles.css";
import Grid from "../Grid/grid";
import Button from "../../Common/Button/button";
import List from "../List/List";

function TabsComponent({ coins, isWatchlistPage, setSearch }) {
    const [tabValue, setTabValue] = useState("grid");

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: "#3a80e9",
            },
        },
    });

    const style = {
        color: "var(--white)",
        width: "50vw",
        fontSize: "1.2rem",
        fontWeight: 600,
        fontFamily: "Inter",
        textTransform: "capitalize",
    };

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <TabContext value={tabValue}>
                    <TabList variant="fullWidth" onChange={handleChange}>
                        <Tab label="Grid" value="grid" sx={style} />
                        <Tab label="List" value="list" sx={style} />
                    </TabList>
                    <TabPanel value="grid" className="tabPanel">
                        <Box className="grid-flex">
                            {coins.length == 0 ? (
                                <div>
                                    <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                                        No Items Found
                                    </h1>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <Button
                                            text={"Clear Search"}
                                            onClick={(e) => {
                                                setSearch("");
                                            }}
                                        />
                                    </div>
                                </div>
                            ) : (
                                coins?.map((coin, i) => (
                                    <Grid
                                        coin={coin}
                                        key={i}
                                        delay={((i + 5) % 5) * 0.1}
                                        isWatchlistPage={isWatchlistPage}
                                    />
                                ))
                            )}
                        </Box>
                    </TabPanel>
                    <TabPanel value="list" className="tabPanel">
                        <table className="list-flex">
                            {coins.length == 0 ? (
                                <div>
                                    <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                                        No Items Found
                                    </h1>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <Button
                                            text={"Clear Search"}
                                            onClick={(e) => {
                                                setSearch("");
                                            }}
                                        />
                                    </div>
                                </div>
                            ) : (
                                coins?.map((coin, i) => (
                                    <List
                                        coin={coin}
                                        key={i}
                                        delay={(i % 10) * 0.1}
                                        isWatchlistPage={isWatchlistPage}
                                    />
                                ))
                            )}
                        </table>
                    </TabPanel>
                </TabContext>
            </ThemeProvider>
        </Box>
    );
}

export default TabsComponent;