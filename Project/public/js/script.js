d3.json("/api/bwaters")
    .then(function (d) {
        console.log(d);
        var qOneTotal = 0;
        var qTwoTotal = 0;
        var qThreeTotal = 0;
        var qFourTotal = 0;
        var qFiveTotal = 0;

        var avgRating = [],
        rating = [1, 2, 3, 4, 5],
        margin = {
            top: 0,
            right: 0,
            bottom: 30,
            left: 20
        }

        for (var x = 0; x < d.length; x++) {
            qOneTotal = qOneTotal + parseFloat(d[x].Q1);
            qTwoTotal = qTwoTotal + parseFloat(d[x].Q2);
            qThreeTotal = qThreeTotal + parseFloat(d[x].Q3);
            qFourTotal = qFourTotal + parseFloat(d[x].Q4);
            qFiveTotal = qFiveTotal + parseFloat(d[x].Q5);
        }
        var avgQ1 = qOneTotal / d.length;
        console.log(avgQ1);
        avgRating.push(avgQ1);
        var avgQ2 = qTwoTotal / d.length;
        console.log(avgQ2);
        avgRating.push(avgQ2);
        var avgQ3 = qThreeTotal / d.length;
        console.log(avgQ3);
        avgRating.push(avgQ3);
        var avgQ4 = qFourTotal / d.length;
        console.log(avgQ4);
        avgRating.push(avgQ4);
        var avgQ5 = qFiveTotal / d.length;
        console.log(avgQ5);
        avgRating.push(avgQ5);


        // var avgRating = [22, 13, 53, 45, 77],
       
        height = 260 - margin.top - margin.bottom,
        width = 260 - margin.left - margin.right;

        var ratingColor,
            yScale,
            yAxisValues,
            yAxisTicks,
            // yGuide,
            xScale,
            xAxisValues,
            xAxisTicks,
            // xGuide,
            colors,
            tooltip,
            myChart;

        // for (var i = 0; i<d.list.length; i++) {
        //   avgRating.push(d.list[i].main.temp);
        //   rating.push( new Date(d.list[i].dt_txt) );
        // }

        yScale = d3.scaleLinear()
            .domain([0, d3.max(avgRating)])
            .range([0, height]);

        yAxisValues = d3.scaleLinear()
            .domain([0, d3.max(avgRating)])
            .range([height, 0]);

        yAxisTicks = d3.axisLeft(yAxisValues)
            .ticks(10)

        xScale = d3.scaleBand()
            .domain(avgRating)
            .paddingInner(.1)
            .paddingOuter(.1)
            .range([0, width])

        // xAxisValues = d3.scaleTime()
        //   .domain([rating[0],rating[(rating.length-1)]])
        //   .range([0, width])

        xAxisValues = d3.scaleLinear()
            .domain([0, d3.max(rating)])
            .range([0, width])

        xAxisTicks = d3.axisBottom(xAxisValues)
            // .ticks(d3.timeDay.every(1))
            .ticks(10)

        colors = d3.scaleLinear()
            .domain([0, 2.5, d3.max(avgRating)])
            .range(['#FFFFFF', '#2D8BCF', '#DA3637'])

        tooltip = d3.select('body')
            .append('div')
            .style('position', 'absolute')
            .style('padding', '0 10px')
            .style('background', 'white')
            .style('opacity', 0);

        myChart = d3.select('#viz').append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform',
                'translate(' + margin.left + ',' + margin.right + ')')
            .selectAll('rect').data(avgRating)
            .enter().append('rect')
            .attr('fill', colors)
            .attr('width', function (d) {
                return xScale.bandwidth();
            })
            .attr('height', 0)
            .attr('x', function (d) {
                return xScale(d);
            })
            .attr('y', height)

            .on('mouseover', function (d) {
                tooltip.transition().duration(200)
                    .style('opacity', .9)
                tooltip.html(
                        '<div style="font-size: 2rem; font-weight: bold">' +
                        d + '</div>'//'&deg;</div>'
                    )
                    .style('left', (d3.event.pageX - 35) + 'px')
                    .style('top', (d3.event.pageY - 30) + 'px')
                ratingColor = this.style.fill;
                d3.select(this)
                    .style('fill', 'yellow')
            })

            .on('mouseout', function (d) {
                tooltip.html('')
                d3.select(this)
                    .style('fill', ratingColor)
            });

        yGuide = d3.select('#viz svg').append('g')
            .attr('transform', 'translate(20,0)')
            .call(yAxisTicks)

        xGuide = d3.select('#viz svg').append('g')
            .attr('transform', 'translate(20,' + height + ')')
            .call(xAxisTicks)

        myChart.transition()
            .attr('height', function (d) {
                return yScale(d);
            })
            .attr('y', function (d) {
                return height - yScale(d);
            })
            .delay(function (d, i) {
                return i * 20;
            })
            .duration(3000)
            .ease(d3.easeBounceOut)
            console.log(d + ",   " + avgRating)
    });
    