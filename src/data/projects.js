// ---------------------------------------------------------------
// PROJECT DATA — one object per project. Add or edit projects here;
// ProjectCard and ProjectDetails read from this file automatically.
//
// Replace every `image`, `githubUrl` and `powerbiUrl` placeholder
// with your real dashboard screenshot and links.
// ---------------------------------------------------------------

export const projects = [
  {
  id: "hospital-executive-analytics",

  name: "Hospital & Healthcare Analytics",

  tools: [
    "Power BI",
    "DAX",
    "Power Query",
    "Excel"
  ],

  objective:
    "Analyze hospital operations, patient visits, treatments, revenue, insurance payments, doctors and departments to identify performance trends and support data-driven healthcare business decisions.",

  kpis: [
    "Total Patients",
    "Total Visits ",
    "Total Revenue ",
    "Total Treatments",
    "Total Hospitals ",
    "Average Treatment Cost ",
    "Insurance Amount ",
    "Unique Patients in Transactions",
    "Average Visits per Patient "
  ],

  analysis: [
    "Monthly Patient Trend",
    "Revenue Trend",
    "Revenue by Hospital",
    "Patients by Department",
    "Department-wise Revenue",
    "Department Performance Ranking",
    "Hospital Performance & Ranking",
    "Bed Capacity Analysis",
    "Revenue by Treatment",
    "Patient Demographics",
    "Patients by City",
    "Gender Analysis",
    "Age Group Analysis",
    "New vs Returning Patients",
    "Financial Performance"
  ],

  dataset:
    "Healthcare analytics dataset containing patient records, medical transactions, hospitals, departments, doctors, treatments, revenue, insurance payments, patient payments and hospital capacity information. The dashboard covers 60 patients, 150 medical transaction records, 13 treatments, 10 hospitals and 12 departments.",

  dataCleaning:
    "Cleaned and standardized hospital, department, doctor and treatment fields; handled missing treatment and payment values; checked duplicate patient records; validated revenue, insurance and patient payment values; standardized categorical values and ensured consistent date formats.",

  dataTransformation:
    "Combined patient, medical transaction, hospital, department and treatment information for reporting. Created calculated fields for patient visits, treatment cost, insurance amount, patient payment and revenue. Derived month and year fields for trend analysis and created age groups for patient demographic analysis.",

  dataModeling:
    "Built a Power BI analytical model connecting medical transaction data with patient, hospital, department, doctor, treatment and date dimensions. The model supports analysis of patient visits, revenue, treatment performance, hospital performance and departmental KPIs.",

  sqlAnalysis:
    "SELECT Department,\n" +
    "       COUNT(*) AS Total_Visits,\n" +
    "       SUM(Revenue) AS Total_Revenue\n" +
    "FROM MedicalTransaction\n" +
    "GROUP BY Department\n" +
    "ORDER BY Total_Revenue DESC;",

  daxMeasures:
    "Total Patients = DISTINCTCOUNT(Patient[PatientID])\n\n" +
    "Total Visits = COUNTROWS('Medical Transaction')\n\n" +
    "Total Revenue = SUM('Medical Transaction'[Revenue])\n\n" +
    "Total Treatments = DISTINCTCOUNT(Treatment[TreatmentID])\n\n" +
    "Average Treatment Cost = AVERAGE('Medical Transaction'[TreatmentCost])\n\n" +
    "Insurance Amount = SUM('Medical Transaction'[InsuranceAmount])\n\n" +
    "Patient Amount = SUM('Medical Transaction'[PatientAmount])\n\n" +
    "Unique Patients in Transaction = DISTINCTCOUNT('Medical Transaction'[PatientID])\n\n" +
    "Average Visits per Patient = DIVIDE([Total Visits], [Unique Patients in Transaction], 0)\n\n" +
    "Returning Patients = COUNTROWS(\n" +
    "    FILTER(\n" +
    "        VALUES('Medical Transaction'[PatientID]),\n" +
    "        CALCULATE(COUNTROWS('Medical Transaction')) > 1\n" +
    "    )\n" +
    ")\n\n" +
    "Returning Patients % = DIVIDE([Returning Patients], [Unique Patients in Transaction], 0)\n\n" +
    "Profit / Revenue Analysis = [Total Revenue] - [Total Treatment Cost]",

  insights: [
    "The dashboard contains 60 total patients and 150 medical transaction records, with an average of 2.50 visits per patient based on the transaction-level patient count.",

    "Total revenue is approximately ₹2.07M, while insurance-related revenue is approximately ₹1.34M, showing that insurance payments represent a significant portion of the financial activity.",

    "The Hospital Performance analysis compares hospitals using revenue, patient count and bed capacity to identify differences in operational performance.",

    "The department analysis covers 12 departments and compares patient volume, treatment count, average treatment metrics and department-wise revenue.",

    "Monthly analysis shows changes in patient visits and revenue across the year, helping identify higher- and lower-activity periods.",

    "The Financial Dashboard separates total revenue, insurance revenue, patient payments and treatment cost to provide a clearer view of hospital financial performance.",

    "Patient Analytics compares unique patients with total visits and includes demographic analysis such as city, gender and age group.",

    "The dashboard also compares new and returning patients to understand patient retention and repeat-visit behavior."
  ],

  recommendations: [
    "Use hospital-level revenue, patient volume and bed capacity together to identify hospitals requiring operational review or resource balancing.",

    "Monitor departments with high patient volume and treatment activity to support appropriate staffing and resource allocation.",

    "Track monthly patient and revenue trends to improve workforce planning and operational scheduling during high-demand periods.",

    "Analyze insurance revenue and patient payments separately to identify opportunities for improving payment collection and financial planning.",

    "Monitor high-volume treatments and their associated treatment costs to support cost-control and resource-management decisions.",

    "Use new-versus-returning patient analysis to understand patient retention and improve follow-up strategies.",

    "Compare department-wise revenue with patient volume to identify departments with different revenue-per-patient patterns."
  ],

  image: "/img/Hospital-Healthcare.png",

  githubUrl:
    "https://github.com/Kashishpatel09/Hospital-Healthcare-Analytics-Power-bi",

},
  
  {
  id: "bakery-sales-waste-analytics",

  name: "Food Waste & Profit Analytics",

  tools: [
    "Power BI",
    "SQL",
    "Excel",
    "DAX",
    "Power Query"
  ],

  objective:
    "Analyze food sales, waste, inventory and profit opportunities across products, categories and stores to identify major waste drivers, improve inventory efficiency and reduce avoidable losses.",

  kpis: [
    "Total Sales ",
    "Total Waste Cost ",
    "Waste % ",
    "Total Profit ",
    "Potential Savings ",
    "Total Qty Wasted ",
    "Expired Waste % ",
    "Average Waste Cost ",
    "Current Stock ",
    "Total Sell ",
    "Inventory Turnover ",
    "Overstock"
  ],

  analysis: [
    "Sales Trend",
    "Waste Trend",
    "Waste by Category",
    "Waste by Store",
    "Monthly Waste Trend",
    "Waste by Reason",
    "Category-wise Waste",
    "Top 10 Wasted Products",
    "Store Heatmap",
    "Stock Level vs Demand",
    "Inventory Turnover by Category",
    "Overstock Products",
    "Slow-Moving Products",
    "Current Waste vs Target Waste",
    "Category-wise Potential Saving",
    "Store-wise Profit Opportunity"
  ],

  dataset:
    "Food and bakery operations dataset covering sales, waste, inventory, products, categories, stores and waste reasons. The analysis includes product-level waste, store-level performance, monthly waste trends, inventory levels, demand, overstock and potential savings.",

  dataCleaning:
    "Cleaned and standardized product, category and store names; checked sales and waste quantities for invalid or zero values; standardized waste-reason categories such as Expired, Damaged, Overstock, Spoilage and Poor Storage; validated inventory and sales quantities and handled inconsistent records.",

  dataTransformation:
    "Combined sales, waste and inventory information at product, category and store levels. Created calculated fields for waste cost, waste percentage, average waste cost per unit, inventory turnover, overstock quantity and potential savings. Derived month-level metrics for sales and waste trend analysis.",

  dataModeling:
    "Built a Power BI analytical model connecting sales, waste and inventory facts with shared Product, Category, Store and Date dimensions. The model supports analysis of waste drivers, inventory efficiency, store performance, product performance and profit opportunities.",

  sqlAnalysis:
    "SELECT Product,\n" +
    "       SUM(WasteQuantity) AS Total_Wasted,\n" +
    "       SUM(WasteCost) AS Total_Waste_Cost\n" +
    "FROM Waste\n" +
    "GROUP BY Product\n" +
    "ORDER BY Total_Waste_Cost DESC;",

  daxMeasures:
    "Total Sales = SUM(Sales[SalesAmount])\n\n" +
    "Total Waste Cost = SUM(Waste[WasteCost])\n\n" +
    "Total Waste = SUM(Waste[WasteQuantity])\n\n" +
    "Waste % = DIVIDE([Total Waste Cost], [Total Sales], 0)\n\n" +
    "Total Profit = SUM(Sales[Profit])\n\n" +
    "Average Waste Cost / Unit = DIVIDE([Total Waste Cost], [Total Waste], 0)\n\n" +
    "Inventory Turnover = DIVIDE([Total Sell], [Average Stock], 0)\n\n" +
    "Overstock Quantity = SUM(Inventory[OverstockQuantity])\n\n" +
    "Potential Savings = [Total Waste Cost] * 20%\n\n" +
    "Target Waste = [Total Waste Cost] * 80%\n\n" +
    "Waste Reduction % = DIVIDE([Total Waste Cost] - [Target Waste], [Total Waste Cost], 0)",

  insights: [
    "Total waste cost is approximately 705.075K, with waste percentage shown as 0.11 on the Executive Overview.",

    "Bakery is the largest waste-contributing category at approximately 240.41K, representing 34.1% of total waste.",

    "Dairy contributes approximately 148.87K of waste, followed by Fruits at 119.72K.",

    "Rajkot records the highest store-level waste at approximately 200K, followed by Bharuch at 120K and Ahmedabad at 109K.",

    "Croissant is the most wasted product at approximately 129K, followed by Cake at 81K.",

    "Expired waste is the largest identified waste reason at approximately 237.64K, followed by Damaged waste at approximately 217.42K.",

    "Monthly waste is highest in January at approximately 194K and falls to approximately 85K in February before fluctuating during the following months.",

    "The Inventory Analysis shows current stock of 105,625 units, total sell of 28,821 units and overstock of 5,827 units.",

    "The Profit Opportunity dashboard uses a 20% waste-reduction target and identifies potential savings through store and category-level waste reduction.",

    "The dashboard highlights Rajkot and Bakery as major areas for waste-reduction opportunities."
  ],

  recommendations: [
    "Focus waste-reduction efforts on Bakery products because the category contributes the largest share of total waste.",

    "Investigate Croissant and Cake production, demand forecasting and expiry patterns because they are among the highest-wasted products.",

    "Review Rajkot store operations to identify the reasons behind its highest waste level.",

    "Reduce expired waste by improving demand forecasting, production planning and inventory rotation.",

    "Review damaged products and storage practices to reduce avoidable waste caused by handling and poor storage.",

    "Use stock-level versus demand analysis to identify products with excess inventory before they become waste.",

    "Monitor slow-moving products and adjust purchasing or production quantities based on historical demand.",

    "Use the 20% waste-reduction target to estimate potential savings across stores and product categories.",

    "Compare inventory turnover across categories to identify categories with relatively slower movement and higher inventory risk."
  ],

  image: "/img/Food-Waste-Profit.png",

  githubUrl:
    "https://github.com/Kashishpatel09/Food-Waste-Profit-Opportunity-Power-Bi",

  // powerbiUrl:
  //   "https://app.powerbi.com/view?r=REPLACE_ME",
},
{
  id: "banking-loan-analytics",
  name: "Banking & Loan Analytics",
  tools: ["Power BI", "SQL", "DAX", "Power Query", "Excel"],

  objective:
    "Analyze customer profiles, loans, repayments, interest income, outstanding balances and loan performance to understand overall banking and lending performance.",

  kpis: [
    "Total Customers",
    "Total Loans",
    "Total Loan Amount",
    "Total Outstanding Amount",
    "Total Repayment",
    "Interest Income",
    "Average Loan Amount",
    "Approval Rate"
  ],

  analysis: [
    "Banking Overview",
    "Customer Analytics",
    "Loan Analytics",
    "Repayment & Risk Analysis",
    "Branch Analysis",
    "Loan Type Analysis"
  ],

  dataset:
    "Banking and loan dataset containing 500 customers, 700 loan records and 20 branches. The dataset includes customer information, loan details, repayment data, branch information and loan type details.",

  dataCleaning:
    "Cleaned and prepared the banking dataset using Power Query by handling data types, standardizing categorical values, removing duplicate records where required, and preparing customer, loan, branch and repayment data for analysis.",

  dataTransformation:
    "Created calculated fields and transformed the data to analyze loan amounts, outstanding balances, repayment amounts, interest income, approval rate, customer segments, branches and loan types.",

  dataModeling:
    "Built a structured Power BI data model connecting customer, loan, branch, repayment and loan type information to support interactive banking and loan analysis.",

  sqlAnalysis:
    "SELECT LoanStatus, COUNT(*) AS Total_Loans, SUM(OutstandingAmount) AS Outstanding\nFROM Loans\nGROUP BY LoanStatus\nORDER BY Outstanding DESC;",

  daxMeasures:
    "Total Customers = DISTINCTCOUNT(Customers[CustomerID])\nTotal Loans = COUNTROWS(Loans)\nTotal Loan Amount = SUM(Loans[LoanAmount])\nTotal Repayment = SUM(Loans[RepaymentAmount])\nInterest Income = SUM(Loans[InterestIncome])\nOutstanding Amount = SUM(Loans[OutstandingAmount])\nAverage Loan Amount = AVERAGE(Loans[LoanAmount])",

  insights: [
    "The dashboard covers 500 customers and 700 loan records across 20 branches.",
    "The total loan portfolio is approximately 912M, with approximately 543.79M outstanding.",
    "Total repayment is approximately 619.39M, while interest income is approximately 26.50M.",
    "Loan performance can be analyzed across customers, branches, loan types and repayment risk.",
    "The dashboard provides separate views for customer analytics, loan analytics, repayment risk and branch performance."
  ],

  recommendations: [
    "Monitor outstanding loan balances and repayment performance regularly.",
    "Use branch and loan-type analysis to identify areas with higher outstanding balances.",
    "Track late payments and repayment trends to support risk management.",
    "Segment customers and loans to support more targeted banking decisions."
  ],

  image: "/img/Bank & loan.png",

  githubUrl:
    "https://github.com/Kashishpatel09/Banking-Loan-Analytics-PowerBI",

  // powerbiUrl: "",
},
//   {
//     id: "retail-sales-inventory-analytics",
//     name: "Retail Sales & Inventory Analytics",
//     tools: ["SQL", "MySQL", "Power BI", "Excel", "DAX"],
//     objective:
//       "Analyze retail sales, customers, products, inventory and regional performance.",
//     kpis: [
//       "Total Revenue",
//       "Total Profit",
//       "Total Orders",
//       "Total Customers",
//       "Average Order Value",
//       "Inventory Quantity",
//       "Profit Margin",
//     ],
//     analysis: [
//       "Sales Trend",
//       "Profit Trend",
//       "Product Performance",
//       "Category Performance",
//       "Regional Sales",
//       "Customer Analysis",
//       "Inventory Analysis",
//       "Top & Bottom Products",
//     ],
//     dataset:
//       "Placeholder — describe the dataset here: source, number of rows, and the time period it covers.",
//     dataCleaning:
//       "Placeholder — summarize cleaning steps: fixing inconsistent category labels, removing cancelled orders, handling missing inventory counts.",
//     dataTransformation:
//       "Placeholder — describe transformations: calculating profit per order line, deriving region from postal code, aggregating to monthly grain.",
//     dataModeling:
//       "Placeholder — describe your schema: fact table (Orders) linked to dimension tables (Products, Customers, Regions, Dates).",
//     sqlAnalysis:
//       "SELECT Category, SUM(Sales) AS Total_Sales\nFROM Sales\nGROUP BY Category\nORDER BY Total_Sales DESC;",
//     daxMeasures:
//       "Total Revenue = SUM(Sales[Revenue])\nProfit Margin = DIVIDE([Total Profit], [Total Revenue], 0)",
//     insights: [
//       "Placeholder — e.g. Two categories drive the majority of profit despite lower sales volume than others.",
//       "Placeholder — e.g. Inventory for a few top-selling products runs low ahead of peak months.",
//     ],
//     recommendations: [
//       "Placeholder — e.g. Increase stock allocation for high-margin, fast-moving products before peak season.",
//     ],
//     image: null, // TODO: add /src/assets/dashboard/retail-sales-inventory.png
//     githubUrl: "https://github.com/kashish-patel/retail-sales-inventory-analytics", // TODO: replace
//     powerbiUrl: "https://app.powerbi.com/view?r=REPLACE_ME", // TODO: replace
//   },
];
