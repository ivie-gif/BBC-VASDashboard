export interface AirtelStatItem {
    name: string;
    value: number;
    color: string;
  }
  
  export const telcoairtelData: AirtelStatItem[] = [
    { name: 'ACK', value: 210000, color: '#4caf50' },
    { name: 'DELIVRD', value: 9461, color: '#2196f3' },
    { name: 'EXPIRED', value: 233454, color: '#f44336' },
    { name: 'UNDELIV', value: 6232, color: '#9c27b0' },
    { name: 'NACK', value: 14300, color: '#ff9800' },
  ];
  