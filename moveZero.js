/**
 * a function with arguement of an array, 
 * it will move any instance of 0 to the back of the array
 * 
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * [0,1,0,3,12]
 * 
 * Because the input is already in sorted formated without the 0,
 * so we will get all the non-zero elements and put those in front of our
 * arr and the rest we will fill the values with 0
 * 
 */
function moveZeros(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        nums[j] = nums[i];
        j++;
      }
    }
    for (j; j < nums.length; j++) {
      nums[j] = 0;
    }
  }
  
  const nums = [0, 1, 0, 3, 12];
  console.log(`Before the move: ${nums}`);
  moveZeros(nums);
  console.log(`After the move: ${nums}`);


