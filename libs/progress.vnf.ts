import ProgressVnfInterface from "./progress.vnf.interface";
import  * as cliProgress from "cli-progress"
import * as ansiColors from "ansi-colors";
export default class ProgressVNF implements ProgressVnfInterface {
    private processing : number = 0;
    private bar : cliProgress.SingleBar = new cliProgress.SingleBar({
        format: 'NukeCli Progress |' + ansiColors.green('{bar}') + '| {percentage}% built',
        hideCursor: true
    }, cliProgress.Presets.shades_classic);
    init(): ProgressVnfInterface {    
        this.bar.start(100, 0); 
        return this;
    }
    update(process : number = 0): ProgressVnfInterface {
        this.processing = process;
        this.bar.update(this.processing); 
        return this;
    }
    stop(): ProgressVnfInterface {
        this.bar.stop();
        return this;
    }
    increment(): ProgressVnfInterface {
        this.bar.increment();
        return this;
    }
}