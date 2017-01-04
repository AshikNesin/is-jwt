import test from 'ava';
import isJWT from './';

const VALID_JWT = 'eyJhbGciOiJIUzI1NiIsImV4cCI6MTQ5MzE3NDkxMCwiaWF0IjoxNDgyMzk3OTEwfQ.eyJyb2xlIjoiZW1wbG95ZXIiLCJpZCI6MiwiZW1haWwiOiJhc2hpa0BuZm5sYWJzLmluIn0.ICtMwjrhg4KbQjPJBWd29O4KRogNdjQj8bOhUrvYlLw';
const NOT_VALID_JWT = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus sequi, sunt quaerat!';

test('Testing with Valid JWT Token', t => {
	t.is(isJWT(VALID_JWT), true);
});

test('Testing with Other string', t => {
	t.is(!isJWT(NOT_VALID_JWT), true);
});

