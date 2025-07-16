// interface VisitorInsightsProps {
//   'New Visitors': number[];
// }

// export const visitorInsightsData: VisitorInsightsProps = {
//   'New Visitors': [210, 115, 440, 370, 320, 500, 270, 450, 381, 245, 212, 333],
// };


// Define the type for monthly data of a single telco
type TelcoMonthlyData = {
  [month: string]: number;
};

// Define the full data structure for all telcos
export interface VisitorInsightsProps {
  mtn: TelcoMonthlyData;
  glo: TelcoMonthlyData;
  airtel: TelcoMonthlyData;
  etisalat: TelcoMonthlyData;
}

// Sample mock data
export const mockTelcoData: VisitorInsightsProps = {
  mtn: {
    January: 50,
    February: 60,
    March: 70,
    April: 80,
    May: 90,
    June: 100,
    July: 110,
    August: 120,
    September: 130,
    October: 140,
    November: 150,
    December: 160,
  },
  glo: {
    January: 40,
    February: 50,
    March: 60,
    April: 70,
    May: 80,
    June: 90,
    July: 100,
    August: 110,
    September: 120,
    October: 130,
    November: 140,
    December: 150,
  },
  airtel: {
    January: 60,
    February: 55,
    March: 80,
    April: 60,
    May: 75,
    June: 85,
    July: 40,
    August: 60,
    September: 71,
    October: 45,
    November: 22,
    December: 23,
  },
  etisalat: {
    January: 60,
    February: 50,
    March: 230,
    April: 160,
    May: 75,
    June: 225,
    July: 20,
    August: 160,
    September: 60,
    October: -70,
    November: -100,
    December: 0,
  },
};
