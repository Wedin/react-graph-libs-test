import React, { PureComponent } from "react";
import { storiesOf } from "@storybook/react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { data } from "./demoData";
import { dateFormatter } from "./utils";

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
          {dateFormatter.format(new Date(payload.value * 1000))}
        </text>
      </g>
    );
  }
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      // TODO: Style this
      <div className="custom-tooltip">
        <p>Tooltip title</p>
        <p className="label">{payload[0].value}</p>
        <p className="label">{dateFormatter.format(new Date(label * 1000))}</p>
      </div>
    );
  }

  return null;
};

const stories = storiesOf("Recharts", module);
stories.add("recharts", () => (
  <LineChart width={900} height={400} data={data}>
    <XAxis dataKey="x" tick={<CustomizedAxisTick />} />
    <YAxis tickFormatter={tick => `${tick / 1000}s`} />
    <Tooltip content={<CustomTooltip />} />
    <Legend />
    <Line type="monotone" dot={false} dataKey="y" stroke="#78c1f8" />
  </LineChart>
));
