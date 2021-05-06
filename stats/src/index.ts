import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summery } from './Summery';
import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satifying
// the 'DataReader' interface
const macthReader = new MatchReader(csvFileReader);
macthReader.load();

const summery = new Summery(
  new WinsAnalysis('Man United'),
  // new ConsoleReport()
  new HtmlReport()
);

summery.buildAndPrintReport(macthReader.matchs);
