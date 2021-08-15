import React from "react";
import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {bubbleSort, heapsort, mergeSort, quickSort} from "../utils/Algos";

export const DataSetter = ({size, setSize, chartData, setChartData}) => {

  const onSizeChange = (e) => setSize(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const m0 = performance.now();
    const sorted = mergeSort([...chartData.data]);
    const m1 = performance.now()
    const q0 = performance.now();
    quickSort([...chartData.data]);
    const q1 = performance.now()
    const h0 = performance.now();
    heapsort([...chartData.data]);
    const h1 = performance.now()
    const b0 = performance.now();
    bubbleSort([...chartData.data]);
    const b1 = performance.now()

    setChartData({
      ...chartData,
      data: sorted,
      merge_time: m1 - m0,
      quick_time: q1 - q0,
      heap_time: h1 - h0,
      bubble_time: b1 - b0
    })
  }

  return (
    <Form className='d-flex justify-content-between align-items-center' onSubmit={onSubmit}>
      <FormGroup>
        <Label for="size-id" className="me-2">Array size</Label>
        <Input type="range" name="range" id="size-id" className="align-middle me-2" value={size} onChange={onSizeChange}
               min="5" max="1000"/>
        <FormText>{size}</FormText>
      </FormGroup>
      <Button size={'sm'} color={'success'}>Order</Button>
    </Form>
  )
}
