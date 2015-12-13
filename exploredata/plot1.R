##getting full datatable
datatable <- read.table("household_power_consumption.txt", header = TRUE, sep = ';',na.strings = "?", nrows = 2075259,check.names=FALSE, stringsAsFactors = FALSE, comment.char = "",quote = '\"')

##subsetting the table between two days
date1 <-"1/2/2007"
date2 <-"2/2/2007"
dataused <- datatable[datatable$Date %in% c(date1,date2) ,]

                              
##generating plot1 and export PNG
png("plot1.png", width=480, height=480)
hist(dataused$Global_active_power, col = "red", main = paste("Global Active Power"), xlab = "Global Active Power (kilowatts)")
dev.off()