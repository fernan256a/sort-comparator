import React, {useEffect, useState} from "react";
import Chart from "../components/Chart";
import {DataSetter} from "../components/DataSetter";
import {Container} from "reactstrap";
import Header from "../components/Header";

export const MainPanel = () => {
  const [size, setSize] = useState('5');
  const MAX_NUMBER = 300;
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const data = Array.from({length: size}, () => Math.floor(Math.random() * MAX_NUMBER));
    const labels = Array.from({length: size}, () => '');
    setChartData({data, labels, merge_time: 0, quick_time: 0, heap_time: 0, bubble_time: 0});
  }, [size])

  return (
    <Container className="pt-3">
      <Header/>
      <DataSetter size={size} setSize={setSize} chartData={chartData} setChartData={setChartData}/>
      <Chart chartData={chartData}/>
      <h5 className="text-center">{`Bubble sort: ${chartData.bubble_time}ms`}</h5>
      <h5 className="text-center">{`Heap sort: ${chartData.heap_time}ms`}</h5>
      <h5 className="text-center">{`Merge sort: ${chartData.merge_time}ms`}</h5>
      <h5 className="text-center">{`Quick sort: ${chartData.quick_time}ms`}</h5>
    </Container>
  )
}
