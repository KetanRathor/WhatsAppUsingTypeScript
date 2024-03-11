import reducer from './reducer'; 

describe('reducer', () => {
  it('should handle SOME_ACTION_TYPE correctly', () => {
    const initialState = {
      contact: [
        {
          contactNumber: 123,
          messages: [],
        },
      ],
      selectedPerson: {
        contactNumber: 123,
        messages: [],
      },
    };

    const action = {
      type: 'SOME_ACTION_TYPE',
      payload: 'Test message',
    };

    const expectedState = {
      contact: [
        {
          contactNumber: 123,
          messages: ['Test message'],
        },
      ],
      selectedPerson: {
        contactNumber: 123,
        messages: ['Test message'],
      },
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  // Add more test cases as needed for other action types or scenarios
});
 // Replace with the actual path to your reducer file

describe('reducer', () => {
  it('should handle SOME_ACTION_TYPE correctly', () => {
    const initialState = {
      contact: [
        {
          contactNumber: 123,
          messages: [],
        },
      ],
      selectedPerson: {
        contactNumber: 123,
        messages: [],
      },
    };

    const action = {
      type: 'SOME_ACTION_TYPE',
      payload: 'Test message',
    };

    const expectedState = {
      contact: [
        {
          contactNumber: 123,
          messages: ['Test message'],
        },
      ],
      selectedPerson: {
        contactNumber: 123,
        messages: ['Test message'],
      },
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  // Add more test cases as needed for other action types or scenarios
});
