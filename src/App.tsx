import { chartData as sample1 } from "../sample-data/sample1";
import { chartData as sample2 } from "../sample-data/sample2";
import { chartData as sample3 } from "../sample-data/sample3";
import MultidimensionalChart from "./components/MultidimensionalChart";
import { BarProps } from "./components/MultidimensionalChart/Bar";

function App() {
  return (
    <div className="text-sky-900">
      <div className="container px-6 pt-10 pb-24 mx-auto">
        <div className="flex flex-col w-full max-w-xl mx-auto divide-y space-y-14">
          <MultidimensionalChart
            className="pt-10"
            showLabels
            showValues
            bars={sample2.bars as BarProps[]}
          />
          <MultidimensionalChart
            className="pt-10"
            showLabels
            showValues
            bars={sample3.bars as BarProps[]}
          />
          <MultidimensionalChart
            className="pt-12"
            showLabels
            headings={sample1.headings}
            legend={sample1.legend}
            bars={sample1.bars as BarProps[]}
            caption={
              <table>
                <thead>
                  <tr>
                    <th colSpan={2}>Medical Benefits Schedule (MBS) fee</th>
                    <th colSpan={2}>Medical Gap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fully covered</td>
                    <td>75% of MBS fee paid by Medicare</td>
                    <td>25% of MBS fee paid by HBF</td>
                    <td colSpan={2}>25% of Medical Gap paid by HBF</td>
                  </tr>
                  <tr>
                    <td>Known gap</td>
                    <td>75% of MBS fee paid by Medicare</td>
                    <td>25% of MBS fee paid by HBF</td>
                    <td>12.5% of Medical Gap paid by HBF</td>
                    <td>You pay 12.5% of Medical Gap</td>
                  </tr>
                  <tr>
                    <td>No agreement / Opt out</td>
                    <td>75% of MBS fee paid by Medicare</td>
                    <td>25% of MBS fee paid by HBF</td>
                    <td colSpan={2}>You pay 25% of Medical Gap</td>
                  </tr>
                </tbody>
              </table>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
