import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { MatchData } from './MatchData';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matchs: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summery {
  static getWinsAnalysisWithHtmlReportInstance(team: string): Summery {
    return new Summery(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
