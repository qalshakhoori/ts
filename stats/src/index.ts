import { MatchReader } from './MatchReader';
import { Summery } from './Summery';

const macthReader = MatchReader.fromCsv('football.csv');
const summery = Summery.getWinsAnalysisWithHtmlReportInstance('Man United');

macthReader.load();
summery.buildAndPrintReport(macthReader.matchs);
