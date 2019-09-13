import React from "react";
import { storiesOf } from "@storybook/react";
import { AutoSizer } from "react-virtualized";
import { Line } from "@nivo/line";
import styled from "styled-components";
import { data } from "./demoData";
import { dateTimeFormatter } from "./utils";

const stories = storiesOf("Nivo Line", module);

const max = data.map(point => point.y).sort()[0];

const StyledTooltip = styled.div`
  border-radius: 3px;
  background: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: #383838;
  border: 1px solid #dcdcdc;
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-width: 134px;
  align-items: center;
`;

const TooltipTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 2px;
`;

const TooltipMs = styled.span`
  font-size: 22px;
  margin-top: 2px;
`;

const CustomToolTip = ({ point }) => {
  const timestamp = point.x;
  return (
    <StyledTooltip
      onClick={() => {
        console.log("asdf");
        alert("asd");
      }}
    >
      <TooltipTitle>Title here </TooltipTitle>
      <span>{dateTimeFormatter.format(timestamp * 1000)}</span>
      <TooltipMs>{point.y}ms</TooltipMs>
    </StyledTooltip>
  );
};

stories.add("line chart", () => (
  <AutoSizer>
    {({ width }) => (
      <Line
        width={width || 900}
        height={400}
        enableGridX={false}
        enableGridY={false}
        enableArea={true}
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
        tooltip={({ point }) => {
          return <CustomToolTip point={{ x: parseInt(point.data.xFormatted, 10), y: point.data.y }} />;
        }}
      />
    )}
  </AutoSizer>
));
