##getting full datatable
datatable <- read.table("household_power_consumption.txt", header = TRUE, sep = ';',na.strings = "?", nrows = 2075259,check.names=FALSE, stringsAsFactors = FALSE, comment.char = "",quote = '\"')

##subsetting the table between two days
date1 <-"1/2/2007"
date2 <-"2/2/2007"
dataused <- datatable[datatable$Date %in% c(date1,date2) ,]

##convert date format
dateformat <- paste(dataused$Date,dataused$Time,sep="")
dataused$Datetime <- strptime(dateformat,"%d/%m/%Y %H:%M:%S")

##generating plot2 and export PNG
png("plot2.png", width=480, height=480)
plot(dataused$Datetime, dataused$Global_active_power, type = "l", ylab = "Global Active Power (kilowatts)", xlab = "")
dev.off()