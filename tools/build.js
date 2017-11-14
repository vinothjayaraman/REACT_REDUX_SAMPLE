/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((error,stats)=>{
    if (error) {
        console.log(error.bold.red);
        return 1;
    }
    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error=>console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('webpack generated following warnings:'.bold.yellow);
        jsonStats.warnings.map(warning=>console.log(warning.yellow));
    }

    console.log(`webpack stats: ${stats}`);

    //if we get this far production build is success & written to /dist. 
    console.log('Your application has been compiled in prodcution mode and written into /dist'.green);
    return 0;
});
