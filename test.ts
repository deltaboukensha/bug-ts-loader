
import chai, { expect } from 'chai';

it('throws error but shows the wrong line', async () => {
  const a = 2;
  const b = 4;
  
  const c = a+ b;
  expect(c).to.be.eq(7);
})

// 1) throws error but shows the wrong line:

//       AssertionError: expected 6 to equal 7
//       + expected - actual

//       -6
//       +7
      
//       at /home/delta/dev/bug-ts-mocha/test.ts:17:33 <--- should be line 9
//       at Generator.next (<anonymous>)
//       at /home/delta/dev/bug-ts-mocha/test.ts:8:71
//       at new Promise (<anonymous>)
//       at __awaiter (test.ts:4:12)
//       at Context.<anonymous> (test.ts:13:51)
//       at processImmediate (node:internal/timers:466:21)
