import React from "react";
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

function Matrix() {
  return (
    <ReactiveBase
      url="https://192.168.68.125:9200/"
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
