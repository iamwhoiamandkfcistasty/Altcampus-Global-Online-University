calculate_class_analytics <- function(test_scores) {
  print("📊 [R DATA CORE]: Aggregating bulk historical student metrics...")
  
  class_mean <- mean(test_scores)
  print(paste("📈 [ANALYTICS RESULT]: Average Job Competency Index:", class_mean))
  return(class_mean)
}
