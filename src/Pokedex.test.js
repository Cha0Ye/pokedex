import React from 'react';
import Pokedex from './Pokedex';
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";

it("renders using shallow", function() {
    shallow(<Pokedex />);
  });

it("renders using mount", function() {
    mount(<Pokedex />);
});

it("matches snapshot", function() {
    let wrapper = shallow(<Pokedex />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });