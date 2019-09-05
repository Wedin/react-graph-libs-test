import React from "react";
import { storiesOf } from "@storybook/react";
import { VictoryChart, VictoryLine, VictoryAxis, VictoryArea, VictoryTooltip, VictoryVoronoiContainer } from "victory";
import { data } from "./demoData";
import { dateFormatter } from "./utils";

const stories = storiesOf("Victory chart", module);
const max = data.map(point => point.y).sort()[0];

stories.add("victory", () => (
  <VictoryChart
    width={900}
    height={400}
    containerComponent={
      <VictoryVoronoiContainer
        voronoiBlacklist={["graph-area"]}
        labels={({ datum }) => `Time ${datum.y}, ${dateFormatter.format(new Date(datum.y * 1000))}`}
        labelComponent={<VictoryTooltip />}
      />
    }
  >
    <VictoryAxis
      fixLabelOverlap
      tickFormat={date => `${dateFormatter.format(new Date(date * 1000))}`}
      standalone={false}
    />
    <VictoryAxis dependentAxis fixLabelOverlap tickFormat={point => `${point / 1000}s`} standalone={false} />
    <VictoryArea name="graph-area" style={{ data: { fill: "#e0edf8" } }} data={data} />
    <VictoryLine
      style={{
        data: { stroke: "#78c1f8" },
      }}
      data={data}
      domain={{ y: [0, max * 2] }}
      scale={{ x: "linear", y: "time" }}
    />
  </VictoryChart>
));
