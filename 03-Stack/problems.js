/*
===========================================
Question:
Check if parentheses are valid using stack.
===========================================

Valid Parentheses:
- Every opening bracket must have a matching closing bracket
- Order must be correct
*/

function isValidParentheses(string) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for (let ch of string) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    } else {
      let top = stack.pop();
      if (top !== map[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example
console.log(isValidParentheses("({[])"));
console.log(isValidParentheses("({[]})"));



/*
===========================================
Question:
Implement Undo and Redo functionality using stacks.
===========================================

Concept:
- Uses two stacks:
  - undoStack → stores actions
  - redoStack → stores undone actions

Operations:
- do → add new action (clears redo)
- undo → move action from undo → redo
- redo → move action from redo → undo

Time Complexity:
- All operations → O(1)
*/

class UndoRedo {
  constructor() {
    this.undoStack = [];
    this.redoStack = [];
  }

  do(action) {
    this.undoStack.push(action);
    this.redoStack = [];
  }

  undo() {
    if (this.undoStack.length === 0) return "Nothing to undo";

    let action = this.undoStack.pop();
    this.redoStack.push(action);

    return action;
  }

  redo() {
    if (this.redoStack.length === 0) return "Nothing to redo";

    let action = this.redoStack.pop();
    this.undoStack.push(action);

    return action;
  }
}

// Example
let task = new UndoRedo();

task.do(1);
task.do(2);
task.do(3);
task.do(4);

console.log(task.undo()); // 4
console.log(task.undo()); // 3
console.log(task.redo()); // 3
console.log(task.redo()); // 4