import React from 'react';
import Pokecard from './Pokecard';
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";

it("renders using shallow", function() {
    shallow(<Pokecard />);
  });

  it("renders using mount", function() {
    mount(<Pokecard />);
  });

  it("matches snapshot", function() {
    let wrapper = shallow(<Pokecard />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });