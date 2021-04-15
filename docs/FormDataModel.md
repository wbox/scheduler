# Form Data Model

The Form keeps track of the current text input value and the currently selected interviewer. This way, when the user clicks on the save button, it will be able to pass the state as arguments to an onSave callback.

We will need to make the input field a controlled component using the name state to keep track of the value. Remember that the InterviewerList component takes a callback onChange (or setInterviewer).

We can use this to keep track of the currently selected interviewer within the Form component. When we click on the Save button, it should pass the name and the interviewer as arguments to onSave.

## The Form component should track the following state:

```
name:String
interviewer:Number
```

## The Form component should have the following actions:

```
setName:Function
setInterviewer:Function
```

## The Form component should take the following props:

```
name:String
interviewers:Array
interviewer:Number
onSave:Function
onCancel:Function
```