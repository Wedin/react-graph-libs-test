import React from "react";
import { storiesOf } from "@storybook/react";
import { Line } from "@nivo/line";
import { data } from "./demoData";

const stories = storiesOf("Nivo Line", module);

const max = data.map(point => point.y).sort()[0];

stories.add("nivo", () => (
  <Line
    width={900}
    height={400}
    margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
    animate={true}
    data={[
      {
        id: "asdfasdfasdf corp. A",
        data: data,
      },
    ]}
    xScale={{
      type: "time",
      format: "%s",
      precision: "second",
    }}
    xFormat="time:%s"
    yScale={{
      type: "linear",
      min: 0,
      max: max * 2,
    }}
    axisLeft={{
      legend: "time",
      legendOffset: 12,
      format: value => `${value / 1000}s`,
    }}
    axisBottom={{
      format: "%b %d",
      // tickValues: "every 2 days",
    }}
    curve="linear"
    enablePoints={false}
    useMesh={true}
    colors={["#78c1f8"]}
  />
));
