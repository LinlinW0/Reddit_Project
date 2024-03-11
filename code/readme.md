## Code Folder 

The code folder contains the main scripts used to create the analysis for this work, such as the project_eda notebook; the notebooks are rendered into html files in the website folder for simple access.

The wip_scripts folder contains the unclean files containing the results of the experiments used to create the final notebooks located on the principal code folder.

The scripts for gathering the data are located in the folder data_collection. The AzureML spark scripts for extracting the data using PySpark uses two scripts. The first script is a parametrized python script which contains pyspark code that takes a read path and a set of subreddits (among other parameters) and filters. The second script is a Jupyter notebook which is the control plane for defining and starting a job. This notebook kicks off a job that can be left unmonitored and automatically saves the filtered data to the Azure storage.

