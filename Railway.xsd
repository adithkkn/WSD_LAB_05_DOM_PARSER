<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
		<html>
		<head>
		</head>
		<body>
		<h1 style="text-align:center">Booking Details And Status</h1>
		<table border="2" align="center">
		<tr>
		<th>TrainNo</th>
		<th>Seatno</th>
		<th>PassengerName</th>
		<th>Source</th> 
		<th>Destination</th>
		<th>BookingStatus</th>
		<th>StationCode</th>
		</tr>
		<xsl:for-each select="Railway/BookingAndPayments">
		
		<tr>
		<td>
		<xsl:value-of select="trainno"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="seatno"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="passengername"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="source"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="destination"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="bookingstatus"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="stationCode"></xsl:value-of>
		</td>
		</tr>
		</xsl:for-each>
		</table>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>