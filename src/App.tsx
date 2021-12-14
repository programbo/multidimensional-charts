import './App.css'
import MultidimensionalChart, { MultidimensionalChartProps } from './components/MultidimensionalChart'
import { chartData as sample1 } from './components/MultidimensionalChart/sample1'
import { chartData as sample2 } from './components/MultidimensionalChart/sample2'
import { chartData as sample3 } from './components/MultidimensionalChart/sample3'

function App() {
  return (
    <div className="text-sky-900">
      <div className="container px-6 pt-10 pb-24 mx-auto">
        <div className="flex flex-col w-full max-w-xl mx-auto divide-y space-y-14">
          <MultidimensionalChart className="pt-10" {...(sample2 as MultidimensionalChartProps)} />
          <MultidimensionalChart className="pt-10" {...(sample3 as MultidimensionalChartProps)} />
          <MultidimensionalChart className="pt-12" {...(sample1 as MultidimensionalChartProps)} />
        </div>
      </div>
    </div>
  )
}

export default App
