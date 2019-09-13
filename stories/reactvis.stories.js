import React from "react";
import { storiesOf } from "@storybook/react";
import { AutoSizer } from "react-virtualized";
import { data } from "./demoData";
import { XYPlot, XAxis, YAxis, AreaSeries } from "react-vis";

import "../node_modules/react-vis/dist/style.css";

const stories = storiesOf("React-vis", module);

stories.add("line chart", () => (
  <AutoSizer>
    {({ width }) => (
      <>
        <XYPlot xType="time" width={width || 900} height={400}>
          <XAxis title="X Axis" />
          <YAxis title="Y Axis" />
          <AreaSeries color={"#78c1f8"} fill="#e0edf8" data={data.map(point => ({ x: point.x * 1000, y: point.y }))} />
        </XYPlot>
      </>
    )}
  </AutoSizer>
));
