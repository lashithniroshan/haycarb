"use client";

import { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";

am5.addLicense("AM5C-0771-7551-3415-0172");

export function ProfitablityAndFinancialBar() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Root element
    const root = am5.Root.new(chartRef.current!);

    const responsive = am5themes_Responsive.new(root);

    responsive.addRule({
      relevant: am5themes_Responsive.widthM,
      applying: function () {
        chart.set("layout", root.verticalLayout);
        legend.setAll({
          y: null,
          centerY: undefined,
          x: am5.p0,
          centerX: am5.p0,
        });
      },
      removing: function () {
        chart.set("layout", root.horizontalLayout);
        legend.setAll({
          y: am5.p50,
          centerY: am5.p50,
          x: null,
          centerX: undefined,
        });
      },
    });

    // Theme
    root.setThemes([am5themes_Animated.new(root), responsive]);

    // Chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        paddingLeft: 0,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
      })
    );

    // Legend
    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    const data = [
      {
        year: "2021",
        group_turnover: 25,
        profit_before_tax: 4,
        group_tax: 1,
        profit_after_tax: 4,
        profit_attr: 3,
        dividends: 1,
        total_assets: 25,
        share_capital: 0,
        revenue_reserves: 12,
        equity: 15,
        current_assets: 16,
        current_liabilities: 9,
      },
      {
        year: "2022",
        group_turnover: 33,
        profit_before_tax: 5,
        group_tax: 1,
        profit_after_tax: 4,
        profit_attr: 3,
        dividends: 1,
        total_assets: 40,
        share_capital: 0,
        revenue_reserves: 17,
        equity: 21,
        current_assets: 29,
        current_liabilities: 17,
      },
      {
        year: "2023",
        group_turnover: 61,
        profit_before_tax: 8,
        group_tax: 2,
        profit_after_tax: 7,
        profit_attr: 6,
        dividends: 2,
        total_assets: 40,
        share_capital: 0,
        revenue_reserves: 21,
        equity: 25,
        current_assets: 27,
        current_liabilities: 13,
      },
      {
        year: "2024",
        group_turnover: 43,
        profit_before_tax: 6,
        group_tax: 2,
        profit_after_tax: 4,
        profit_attr: 4,
        dividends: 2,
        total_assets: 40,
        share_capital: 0,
        revenue_reserves: 22,
        equity: 26,
        current_assets: 26,
        current_liabilities: 12,
      },
      {
        year: "2025",
        group_turnover: 43,
        profit_before_tax: 6,
        group_tax: 1,
        profit_after_tax: 4,
        profit_attr: 4,
        dividends: 1,
        total_assets: 46,
        share_capital: 0,
        revenue_reserves: 25,
        equity: 30,
        current_assets: 28,
        current_liabilities: 11,
      },
    ];

    // Axes
    const xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9,
      minorGridEnabled: true,
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xRenderer.grid.template.setAll({ location: 1 });
    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    // Series creation function
    function makeSeries(name: string, fieldName: string) {
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name,
          xAxis,
          yAxis,
          valueYField: fieldName,
          categoryXField: "year",
        })
      );

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}: {valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        strokeOpacity: 0,
      });

      series.data.setAll(data);

      series.appear();

      series.bullets.push(() =>
        am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true,
          }),
        })
      );

      legend.data.push(series);
    }

    // Add all series
    makeSeries("Group Turnover", "group_turnover");
    makeSeries("Profit before taxation", "profit_before_tax");
    makeSeries("Group taxation", "group_tax");
    makeSeries("Profit after tax", "profit_after_tax");
    makeSeries(
      "Profit attributable to equity holders of the parent",
      "profit_attr"
    );
    makeSeries("Dividends", "dividends");
    makeSeries("Total Assets", "total_assets");
    makeSeries("Share Capital", "share_capital");
    makeSeries("Revenue Reserves", "revenue_reserves");
    makeSeries("Equity", "equity");
    makeSeries("Current Assets", "current_assets");
    makeSeries("Current Liabilities", "current_liabilities");

    // Animate chart
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      ref={chartRef}
      id="chartdiv"
      className="w-full h-[500px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]"
    />
  );
}

export function KeyRatiosChart() {
  useEffect(() => {
    const root = am5.Root.new("keyratiosdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
      })
    );

    const cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    const data = [
      {
        year: "2021",
        roe: 23,
        eps: 10.25,
        nav: 44.55,
        current_ratio: 1.84,
        liquidity_ratio: 1.07,
      },
      {
        year: "2022",
        roe: 18,
        eps: 11.06,
        nav: 60.8,
        current_ratio: 1.69,
        liquidity_ratio: 0.76,
      },
      {
        year: "2023",
        roe: 26,
        eps: 19.6,
        nav: 74.52,
        current_ratio: 2.06,
        liquidity_ratio: 1.56,
      },
      {
        year: "2024",
        roe: 16,
        eps: 12.6,
        nav: 77.09,
        current_ratio: 2.22,
        liquidity_ratio: 1.66,
      },
      {
        year: "2025",
        roe: 14,
        eps: 12.1,
        nav: 89.3,
        current_ratio: 2.47,
        liquidity_ratio: 1.88,
      },
    ];

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        startLocation: 0.5,
        endLocation: 0.5,
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minGridDistance: 70,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          pan: "zoom",
        }),
      })
    );

    function createSeries(name: string, field: string) {
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name,
          xAxis,
          yAxis,
          stacked: true,
          valueYField: field,
          categoryXField: "year",
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: `[bold]{name}[/]\n{categoryX}: {valueY}`,
          }),
        })
      );

      series.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true,
      });

      series.data.setAll(data);
      series.appear(1000);
    }

    createSeries("Return on Shareholders' Equity (%)", "roe");
    createSeries("Earnings Per Share (Rs.)", "eps");
    createSeries("Net Assets Per Share (Rs.)", "nav");
    createSeries("Current Ratio (Times)", "current_ratio");
    createSeries("Liquidity Ratio (Times)", "liquidity_ratio");

    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(root, {
        orientation: "horizontal",
      })
    );

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="keyratiosdiv" className="w-full h-[500px]" />;
}

export function EnvironmentalPerformance() {
  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        paddingLeft: 0,
        layout: root.verticalLayout,
      })
    );

    // Add legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    // ✅ Your Environmental Data
    let data = [
      {
        year: "2023",
        renewable: 942301,
        wastewater: 196918,
        emissions: 28396,
        solidWaste: 6589,
        rawMaterial: 158885,
        electricity: 3656,
      },
      {
        year: "2024",
        renewable: 885612,
        wastewater: 241465,
        emissions: 26696,
        solidWaste: 5503,
        rawMaterial: 152221,
        electricity: 2889,
      },
      {
        year: "2025",
        renewable: 850874,
        wastewater: 321433,
        emissions: 44554,
        solidWaste: 5112,
        rawMaterial: 146563,
        electricity: 4390,
      },
    ];

    // Create axes
    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: am5xy.AxisRendererY.new(root, {
          inversed: true,
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
          minorGridEnabled: true,
        }),
      })
    );
    yAxis.data.setAll(data);

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {
          strokeOpacity: 0.1,
          minGridDistance: 50,
        }),
        min: 0,
      })
    );

    // Create series for each metric
    function createSeries(field: string, name: string) {
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: field,
          categoryYField: "year",
          sequencedInterpolation: true,
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "[bold]{name}[/]\n{categoryY}: {valueX}",
          }),
        })
      );

      series.columns.template.setAll({
        height: am5.p100,
        strokeOpacity: 0,
      });

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationX: 1,
          locationY: 0.5,
          sprite: am5.Label.new(root, {
            centerY: am5.p50,
            text: "{valueX}",
            populateText: true,
          }),
        });
      });

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationX: 1,
          locationY: 0.5,
          sprite: am5.Label.new(root, {
            centerX: am5.p100,
            centerY: am5.p50,
            text: "{name}",
            fill: am5.color(0xffffff),
            populateText: true,
          }),
        });
      });

      series.data.setAll(data);
      series.appear();
      return series;
    }

    // Add all your metrics
    createSeries("renewable", "Renewable Energy (GJ)");
    createSeries("wastewater", "Waste Water Treated (Litres '000)");
    createSeries("emissions", "Carbon Emissions (tCO2e)");
    createSeries("solidWaste", "Solid Waste (MT)");
    createSeries("rawMaterial", "Renewable Raw Material (MT)");
    createSeries("electricity", "Electricity to Grid (GJ)");

    // Add legend
    let legend2 = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );
    legend2.data.setAll(chart.series.values);

    // Add cursor
    let cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "zoomY",
      })
    );
    cursor.lineY.set("forceHidden", true);
    cursor.lineX.set("forceHidden", true);

    // Animate chart
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }} />;
}

export function SocialPerformanceChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Root element
    const root = am5.Root.new(chartRef.current!);

    const responsive = am5themes_Responsive.new(root);

    responsive.addRule({
      relevant: am5themes_Responsive.widthM,
      applying: function () {
        chart.set("layout", root.verticalLayout);
        legend.setAll({
          y: null,
          centerY: undefined,
          x: am5.p0,
          centerX: am5.p0,
        });
      },
      removing: function () {
        chart.set("layout", root.horizontalLayout);
        legend.setAll({
          y: am5.p50,
          centerY: am5.p50,
          x: null,
          centerX: undefined,
        });
      },
    });

    // Theme
    root.setThemes([am5themes_Animated.new(root), responsive]);

    // Chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        paddingLeft: 0,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
      })
    );

    // Legend
    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    const data = [
      {
        year: "2023",
        avg_training_hours: 8.9,
        female_employees_percent: 14,
        new_products: 16,
        r_and_d_investment: 187,
        csr_investment: 40.2,
        payments_to_suppliers: 23730,
        customer_satisfaction_index: 85,
      },
      {
        year: "2024",
        avg_training_hours: 12.1,
        female_employees_percent: 14,
        new_products: 14,
        r_and_d_investment: 231,
        csr_investment: 40.8,
        payments_to_suppliers: 18303,
        customer_satisfaction_index: 90,
      },
      {
        year: "2025",
        avg_training_hours: 17.3,
        female_employees_percent: 15,
        new_products: 16,
        r_and_d_investment: 209,
        csr_investment: 50.4,
        payments_to_suppliers: 22228,
        customer_satisfaction_index: 90,
      },
    ];

    // Axes
    const xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9,
      minorGridEnabled: true,
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xRenderer.grid.template.setAll({ location: 1 });
    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    // Series creation function
    function makeSeries(name: string, fieldName: string) {
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name,
          xAxis,
          yAxis,
          valueYField: fieldName,
          categoryXField: "year",
        })
      );

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}: {valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        strokeOpacity: 0,
      });

      series.data.setAll(data);

      series.appear();

      series.bullets.push(() =>
        am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true,
          }),
        })
      );

      legend.data.push(series);
    }

    // Add all series
    makeSeries(
      "Average Training Hours per Employee (No.)",
      "avg_training_hours"
    );
    makeSeries("Female Employees % of Total", "female_employees_percent");
    makeSeries("New Products Developed (No.)", "new_products");
    makeSeries("Investment in R&D (Rs. Mn)", "r_and_d_investment");
    makeSeries("Investment in CSR (Rs. Mn)", "csr_investment");
    makeSeries("Payments to Suppliers (Rs. Mn)", "payments_to_suppliers");
    makeSeries(
      "Customer Satisfaction Index (%)",
      "customer_satisfaction_index"
    );

    // Animate chart
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);
  return <div ref={chartRef} className="w-full h-[500px]" id="socialchart" />;
}

export function GovernanceChart() {
  useEffect(() => {
    const root = am5.Root.new("governancechart");

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
      })
    );

    const cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    const data = [
      {
        year: "2023",
        employees_trained_code_of_conduct: 39,
        total_audits: 55,
        employees_trained_data_privacy: 35,
        environmental_non_compliance: 0,
        new_certifications: 1,
      },
      {
        year: "2024",
        employees_trained_code_of_conduct: 222,
        total_audits: 59,
        employees_trained_data_privacy: 73,
        environmental_non_compliance: 0,
        new_certifications: 2,
      },
      {
        year: "2025",
        employees_trained_code_of_conduct: 256,
        total_audits: 108,
        employees_trained_data_privacy: 218,
        environmental_non_compliance: 0,
        new_certifications: 2,
      },
    ];

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        startLocation: 0.5,
        endLocation: 0.5,
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minGridDistance: 70,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          pan: "zoom",
        }),
      })
    );

    function createSeries(name: string, field: string) {
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name,
          xAxis,
          yAxis,
          stacked: true,
          valueYField: field,
          categoryXField: "year",
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: `[bold]{name}[/]\n{categoryX}: {valueY}`,
          }),
        })
      );

      series.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true,
      });

      series.data.setAll(data);
      series.appear(1000);
    }

    createSeries(
      "Employees Trained on Hayleys/Haycarb Code of Conduct (No.)",
      "employees_trained_code_of_conduct"
    );
    createSeries(
      "Total Audits Conducted on Management Systems (No.)",
      "total_audits"
    );
    createSeries(
      "Employees Trained on Data Privacy (No.)",
      "employees_trained_data_privacy"
    );
    createSeries(
      "Instances of Environmental Non-Compliance (No.)",
      "environmental_non_compliance"
    );
    createSeries("New Certifications (No.)", "new_certifications");

    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(root, {
        orientation: "horizontal",
      })
    );

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="governancechart" className="w-full h-[500px]" />;
}
