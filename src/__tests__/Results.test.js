/**
 * @jest-environment jsdom
 */


 import {expect, test} from '@jest/globals';
 import { renderHook } from '@testing-library/react-hooks';
 import useBreedList from '../useBreedList';
 import {create} from 'react-test-renderer';
 import Results from "../Results";

 test("renders correctly with no pets", ()=> {
    const tree = create(<Results pets={[]}/>).toJSON();
    expect(tree).toMatchSnapshot();
 })