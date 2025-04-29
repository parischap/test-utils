/* eslint-disable functional/no-expression-statements */
import { TEUtils } from '@parischap/test-utils';
import { Array, Either, Equal, Option } from 'effect';
import { describe, expect, it } from 'vitest';

describe('TEUtils', () => {
	describe('assertEquals', () => {
		it('Primitive values', () => {
			expect(() => TEUtils.assertEquals(1, 1)).not.toThrow();
		});

		it('Arrays of options matching', () => {
			expect(() =>
				TEUtils.assertEquals(
					Array.make(Option.some(1), Array.make(Option.none(), Option.some(3))),
					Array.make(Option.some(1), Array.make(Option.none(), Option.some(3)))
				)
			).not.toThrow();
		});

		it('Arrays of options not matching', () => {
			expect(() =>
				TEUtils.assertEquals(
					Array.make(Option.some(1), Option.some(2)),
					Array.make(Option.some(1), Option.none())
				)
			).toThrow();
		});
	});

	describe('assertTrue', () => {
		it('should assert that a value is true', () => {
			expect(() => TEUtils.assertTrue(true)).not.toThrow();
			expect(() => TEUtils.assertTrue(false)).toThrow();
		});
	});

	describe('assertFalse', () => {
		it('should assert that a value is false', () => {
			expect(() => TEUtils.assertFalse(false)).not.toThrow();
			expect(() => TEUtils.assertFalse(true)).toThrow();
		});
	});

	describe('assertNone', () => {
		it('should assert that an Option is none', () => {
			expect(() => TEUtils.assertNone(Option.none())).not.toThrow();
			expect(() => TEUtils.assertNone(Option.some(1))).toThrow();
		});
	});

	describe('assertSome', () => {
		it('should assert that an Option is some with the expected value', () => {
			expect(() => TEUtils.assertSome(Option.some(1), 1)).not.toThrow();
			expect(() => TEUtils.assertSome(Option.some(1), 2)).toThrow();
			expect(() => TEUtils.assertSome(Option.none(), 2)).toThrow();
		});
	});

	describe('assertLeft', () => {
		it('should assert that an Either is left with the expected value', () => {
			expect(() => TEUtils.assertLeft(Either.left('foo'), 'foo')).not.toThrow();
			expect(() => TEUtils.assertLeft(Either.left('foo'), 'bar')).toThrow();
			expect(() => TEUtils.assertLeft(Either.right('foo'), 'foo')).toThrow();
		});
	});

	describe('assertLeftMessage', () => {
		it('should assert that an Either is left with the expected message', () => {
			expect(() => TEUtils.assertLeftMessage(Either.left(new Error('foo')), 'foo')).not.toThrow();
			expect(() => TEUtils.assertLeftMessage(Either.left(new Error('foo')), 'bar')).toThrow();
			expect(() => TEUtils.assertLeftMessage(Either.right(new Error('foo')), 'foo')).toThrow();
		});
	});

	describe('assertRight', () => {
		it('should assert that an Either is right with the expected value', () => {
			expect(() => TEUtils.assertRight(Either.right(42), 42)).not.toThrow();
			expect(() => TEUtils.assertRight(Either.right(42), 43)).toThrow();
			expect(() => TEUtils.assertRight(Either.left(42), 42)).toThrow();
		});
	});

	describe('moduleTagFromTestFilePath', () => {
		it('should return the module tag for a valid test file path', () => {
			expect(
				Equal.equals(
					TEUtils.moduleTagFromTestFilePath('C:/project/packages/module/tests/example.test.ts'),
					Option.some('@parischap/module/example/')
				)
			).toBe(true);
		});

		it('should return none for an invalid test file path', () => {
			expect(Option.isNone(TEUtils.moduleTagFromTestFilePath('C:/project/tests/example.js'))).toBe(
				true
			);
		});
	});
});
