 <form id="quizForm" ng-submit="sendScores()" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScKUaYiY6OFnOHQLMhcPpeUHlwTZLik3tweK0XUcyxDOlPcoQ/formResponse" target="hideConfirm" method="POST" id="mG61Hd">
   <div ng-show="hideForm" class="form-group">
     <input type="text" class="quantumWizTextinputPaperinputInput exportInput" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-labelledby="i1" aria-describedby="i2 i3" dir="auto" data-initial-dir="auto" name="entry.651400212" value="<?php echo $_GET["n"]; ?>" badinput="false">
     <input type="text" class="quantumWizTextinputPaperinputInput exportInput" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-labelledby="i5" aria-describedby="i6 i7" dir="auto" data-initial-dir="auto" name="entry.1991805289" value="{{level}}" badinput="false">
     <input type="text" class="quantumWizTextinputPaperinputInput exportInput" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-labelledby="i9" aria-describedby="i10 i11" dir="auto" data-initial-dir="auto" name="entry.217116829" value="{{score}}" badinput="false">

   </div>
   <button ng-show="hideForm" type="submit" ng-click="stopTimer()" class="btn-lg btn-warning">View your Score</button>
 </form>

 <iframe ng-show="hideForm" name="hideConfirm" width="200px">here</iframe>