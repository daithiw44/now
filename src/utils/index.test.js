import { formatDate, dateSort } from './';

const mockMessages = [
  {
    id:"cd445e6d-e514-424f-ba8f-16ec842002c6",
    userId:"fe27b760-a915-475c-80bb-7cdf14cc6ef3",
    message:"2018 2",
    timestamp:"2018-02-09T14:27:38Z"

  },
  {
  id:"cd445e6d-e514-424f-ba8f-16ec842002c6",
  userId:"fe27b760-a915-475c-80bb-7cdf14cc6ef3",
  message:"2017 1",
  timestamp:"2017-02-09T04:27:38Z"
  },
  {
  id:"cd445e6d-e514-424f-ba8f-16ec842002c6",
  userId:"fe27b760-a915-475c-80bb-7cdf14cc6ef3",
  message:"2018 1",
  timestamp:"2018-02-09T04:27:38Z"
  },
  {
    id:"cd445e6d-e514-424f-ba8f-16ec842002c6",
    userId:"fe27b760-a915-475c-80bb-7cdf14cc6ef3",
    message:"2019 1",
    timestamp:"2019-02-09T04:27:38Z"
  }];

describe ('Utils Tests', () => {
  it('should format the date in readable format', () => {
    expect(formatDate(mockMessages[0].timestamp)).toBe('February 09, 2018, 14:27')
  });

  it('should sort the mockMessages by Date', () => {
    const sorted = mockMessages.sort(dateSort);
    expect(sorted[0].message).toBe('2017 1')
    expect(sorted[2].message).toBe('2018 2')
    expect(sorted[3].message).toBe('2019 1')
  });
});
