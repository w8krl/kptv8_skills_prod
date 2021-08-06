import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Styles.css';
import {
  ReactiveBase,
  DataSearch,
  DynamicRangeSlider,
  MultiList,
  MultiDropdownList,
  ReactiveList,
  ResultCard,
  SelectedFilters
} from "@appbaseio/reactivesearch";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});  


function Matrix() {
   const classes = useStyles();


  

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  return (
    <ReactiveBase
      url="https://192.168.20.128:9200/"
      app="c44contractors"
      credentials="karl:karl1234"
      enableAppbase = {false}
    >
      {/* other components will go here. */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            margin: "10px"
          }}
        >
          <SelectedFilters/>
          <MultiDropdownList
            componentId="rolesfilter"
            dataField="role.keyword"
            title="Filter by Roles"
            aggregationSize={5}
          />
          <MultiDropdownList
            componentId="locationfilter"
            dataField="location.keyword"
            title="Filter by location"
            aggregationSize={5}
          />   

          <DynamicRangeSlider
            className="test"
            style={{"borderRadius":"0px !important"}}
            componentId="ratesensor"
            dataField="rate"
            title="Rate"
            defaultValue={(min, max) => (
              {
                "start": min,
                "end": Math.min(min + 5, max)
              }
            )}
            rangeLabels={(min, max) => (
              {
                "start": min,
                "end": max
              }
            )}
            stepValue={1}
            showHistogram={true}
            showFilter={false}
            interval={8}
            react={{
              and: ["CategoryFilter", "SearchFilter"]
            }}
            URLParams={true}
            loader="Loading ..."
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "66%" }}>
          <DataSearch
            style={{
              marginTop: "35px"
            }}
            componentId="searchbox"
            dataField={[
              "name",
              "name.autosuggest",
              "role",
              "role.autosuggest",
              "location",
              "location.autosuggest",

            ]}
            fieldWeights={[3, 1, 5, 1]}
            placeholder="Search for contractors by name or by role"
          />
          
          <ReactiveList
            componentId="results"
            dataField="name"
            size={8}
            pagination={true}
            react={{
              and: ["searchbox", "ratingsfilter", "rolesfilter","locationfilter", "ratefilter", "ratesensor"]
            }}
            style={{ textAlign: "center" }}
            render={({ data }) => (
              // <ReactiveList.ResultCardsWrapper>
              //   <TableContainer component={Paper}>
              //     <Table className={classes.table} aria-label="simple table">
              //       <TableHead>
              //         <TableRow>
              //           <TableCell>Dessert (100g serving)</TableCell>
              //           <TableCell align="right">Calories</TableCell>
              //           <TableCell align="right">Fat&nbsp;(g)</TableCell>
              //           <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              //           <TableCell align="right">Protein&nbsp;(g)</TableCell>
              //         </TableRow>
              //       </TableHead>
              //       <TableBody>
              //         {rows.map((row) => (
              //           <TableRow key={row.name}>
              //             <TableCell component="th" scope="row">
              //               {row.name}
              //             </TableCell>
              //             <TableCell align="right">{row.calories}</TableCell>
              //             <TableCell align="right">{row.fat}</TableCell>
              //             <TableCell align="right">{row.carbs}</TableCell>
              //             <TableCell align="right">{row.protein}</TableCell>
              //           </TableRow>
              //         ))}
              //       </TableBody>
              //     </Table>
              //   </TableContainer>
              // </ReactiveList.ResultCardsWrapper>
              <ReactiveList.ResultCardsWrapper>
                {data.map((item) => (
                  <ResultCard key={item._id}>
                    <ResultCard.Image
                      style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${item.avatar})`
                      }}
                    />
                    <ResultCard.Title
                      dangerouslySetInnerHTML={{
                        __html: item.name
                      }}
                    />
                    <ResultCard.Description>
                      {item.role +
                        " " +
                        "*".repeat(item.average_rating_rounded)}
                    </ResultCard.Description>
                  </ResultCard>
                ))}
              </ReactiveList.ResultCardsWrapper>              
            )}
          />
        </div>
      </div>
    </ReactiveBase>
  );
}

export default Matrix;


