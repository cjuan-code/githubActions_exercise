import { writeFileSync } from 'fs';
import { getInput } from '@actions/core';

var result = getInput("result");

if (result == "success") {
    console.log(result);
} else if (result == "failure") {
    console.log(result);
}