##getting full datatable
datatable <- read.table("household_power_consumption.txt", header = TRUE, sep = ';',na.strings = "?", nrows = 2075259,check.names=FALSE, stringsAsFactors = FALSE, comment.char = "",quote = '\"')

##subsetting the table between two days
date1 <-"1/2/2007"
date2 <-"2/2/2007"
dataused <- datatable[datatable$Date %in% c(date1,date2) ,]

##convert date format
dateformat <- paste(dataused$Date,dataused$Time,sep="")
dataused$Datetime <- strptime(dateformat,"%d/%m/%Y %H:%M:%S")

##generating plot4 and export PNG
png("plot4.png", width=480, height=480)

par(mfrow = c(2, 2)) 

with(dataused,
     {
plot(dataused$Datetime, dataused$Global_active_power, type = "l", ylab = "Global Active Power (kilowatts)", xlab = "")

plot(dataused$Datetime, dataused$Voltage, type = "l", ylab = "Voltage", xlab = "datetime")

plot(dataused$Datetime, dataused$Sub_metering_1, type = "l", ylab = "Energy Submetering", xlab = "")
lines(dataused$Datetime, dataused$Sub_metering_2, col="red",type = "l")
lines(dataused$Datetime, dataused$Sub_metering_3, col="blue",type = "l")
legend("topright", c("Sub_metering_1", "Sub_metering_2", "Sub_metering_3"), lty=1, lwd=1, col=c("black", "red", "blue"),bty="n")
  

plot(dataused$Datetime, dataused$Global_reactive_power, type = "l", ylab = "Global_reactive_power", xlab = "datetime")
})

dev.off()