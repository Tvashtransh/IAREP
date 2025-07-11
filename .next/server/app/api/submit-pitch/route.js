/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/submit-pitch/route";
exports.ids = ["app/api/submit-pitch/route"];
exports.modules = {

/***/ "(rsc)/./app/api/submit-pitch/route.js":
/*!***************************************!*\
  !*** ./app/api/submit-pitch/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabaseClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/supabaseClient.js */ \"(rsc)/./lib/supabaseClient.js\");\n\n\nasync function POST(request) {\n    try {\n        const formData = await request.json();\n        // Prepare data for database insertion\n        const submissionData = {\n            role: formData.role,\n            // User details\n            full_name: formData.userDetails?.fullName || '',\n            email: formData.userDetails?.email || '',\n            mobile: formData.userDetails?.mobile || '',\n            educational_degree: formData.userDetails?.educationalDegree || '',\n            college: formData.userDetails?.college || '',\n            city: formData.userDetails?.city || '',\n            linkedin: formData.userDetails?.linkedin || '',\n            // Idea/Business description\n            idea_description: formData.aspiringIdeaDescription || '',\n            business_description: formData.founderBusinessDescription || '',\n            // Startup/Business details\n            current_stage: formData.aspiringIdeaDetailsStep?.stage || formData.founderBusinessDetailsStep?.stage || '',\n            team_size: formData.aspiringIdeaDetailsStep?.team || formData.founderBusinessDetailsStep?.team || '',\n            revenue_status: formData.aspiringIdeaDetailsStep?.revenue || formData.founderBusinessDetailsStep?.revenue || '',\n            target_audience: formData.aspiringIdeaDetailsStep?.targetAudience || formData.founderBusinessDetailsStep?.targetAudience || '',\n            business_model: formData.aspiringIdeaDetailsStep?.businessModel || formData.founderBusinessDetailsStep?.businessModel || '',\n            achievements: formData.aspiringIdeaDetailsStep?.achievements || formData.founderBusinessDetailsStep?.achievements || '',\n            // Interests\n            interests: formData.aspiringInterests || formData.founderInterests || [],\n            // Challenges and approaches\n            challenges: formData.aspiringChallenges || formData.founderChallenges || [],\n            approaches: formData.aspiringApproaches || formData.founderApproaches || [],\n            platform_name: formData.aspiringPlatformName || formData.founderPlatformName || '',\n            satisfaction_level: formData.aspiringSatisfaction || formData.founderSatisfaction || '',\n            // Goals and timeline\n            timeline: formData.aspiringTimeline || formData.founderTimeline || '',\n            looking_for: formData.aspiringLookingFor || formData.founderLookingFor || [],\n            ascendthon_interest: formData.aspiringAscendThon || formData.founderAscendThon || '',\n            // Past startup experience (for founders)\n            past_startup_stages: formData.founderPastStartupStages || [],\n            // File uploads\n            pitch_deck_file_name: formData.aspiringPitchDeckFile?.name || formData.founderPitchDeckFile?.name || '',\n            pitch_deck_link: formData.aspiringPitchDeckLink || formData.founderPitchDeckLink || ''\n        };\n        // Insert into Supabase\n        const { data, error } = await _lib_supabaseClient_js__WEBPACK_IMPORTED_MODULE_1__.supabase.from('pitch_submissions').insert([\n            submissionData\n        ]).select();\n        if (error) {\n            console.error('Supabase error:', error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: 'Database error: ' + error.message\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: 'Pitch submitted successfully!',\n            submissionId: data[0]?.id\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('API error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: 'Server error: ' + error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxPQUFPO1lBQ1RJLFFBQVFKLEtBQUssQ0FBQyxtQkFBbUJBO1lBQ2pDLE9BQU9yRSxxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtnQkFBRXFFLFNBQVM7Z0JBQU9MLE9BQU8scUJBQXFCQSxNQUFNTSxPQUFPO1lBQUMsR0FDNUQ7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE9BQU81RSxxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtZQUNFcUUsU0FBUztZQUNUQyxTQUFTO1lBQ1RFLGNBQWNULElBQUksQ0FBQyxFQUFFLEVBQUVVO1FBQ3pCLEdBQ0E7WUFBRUYsUUFBUTtRQUFJO0lBR2xCLEVBQUUsT0FBT1AsT0FBTztRQUNkSSxRQUFRSixLQUFLLENBQUMsY0FBY0E7UUFDNUIsT0FBT3JFLHFEQUFZQSxDQUFDSyxJQUFJLENBQ3RCO1lBQUVxRSxTQUFTO1lBQU9MLE9BQU8sbUJBQW1CQSxNQUFNTSxPQUFPO1FBQUMsR0FDMUQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkQ6XFxDb2Rlc1xcSUFOZXh0XFxpZGVhLWFzY2VuZFxcSUFSRVBcXGFwcFxcYXBpXFxzdWJtaXQtcGl0Y2hcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi8uLi8uLi9saWIvc3VwYWJhc2VDbGllbnQuanMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgXHJcbiAgICAvLyBQcmVwYXJlIGRhdGEgZm9yIGRhdGFiYXNlIGluc2VydGlvblxyXG4gICAgY29uc3Qgc3VibWlzc2lvbkRhdGEgPSB7XHJcbiAgICAgIHJvbGU6IGZvcm1EYXRhLnJvbGUsXHJcbiAgICAgIFxyXG4gICAgICAvLyBVc2VyIGRldGFpbHNcclxuICAgICAgZnVsbF9uYW1lOiBmb3JtRGF0YS51c2VyRGV0YWlscz8uZnVsbE5hbWUgfHwgJycsXHJcbiAgICAgIGVtYWlsOiBmb3JtRGF0YS51c2VyRGV0YWlscz8uZW1haWwgfHwgJycsXHJcbiAgICAgIG1vYmlsZTogZm9ybURhdGEudXNlckRldGFpbHM/Lm1vYmlsZSB8fCAnJyxcclxuICAgICAgZWR1Y2F0aW9uYWxfZGVncmVlOiBmb3JtRGF0YS51c2VyRGV0YWlscz8uZWR1Y2F0aW9uYWxEZWdyZWUgfHwgJycsXHJcbiAgICAgIGNvbGxlZ2U6IGZvcm1EYXRhLnVzZXJEZXRhaWxzPy5jb2xsZWdlIHx8ICcnLFxyXG4gICAgICBjaXR5OiBmb3JtRGF0YS51c2VyRGV0YWlscz8uY2l0eSB8fCAnJyxcclxuICAgICAgbGlua2VkaW46IGZvcm1EYXRhLnVzZXJEZXRhaWxzPy5saW5rZWRpbiB8fCAnJyxcclxuICAgICAgXHJcbiAgICAgIC8vIElkZWEvQnVzaW5lc3MgZGVzY3JpcHRpb25cclxuICAgICAgaWRlYV9kZXNjcmlwdGlvbjogZm9ybURhdGEuYXNwaXJpbmdJZGVhRGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGJ1c2luZXNzX2Rlc2NyaXB0aW9uOiBmb3JtRGF0YS5mb3VuZGVyQnVzaW5lc3NEZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgXHJcbiAgICAgIC8vIFN0YXJ0dXAvQnVzaW5lc3MgZGV0YWlsc1xyXG4gICAgICBjdXJyZW50X3N0YWdlOiBmb3JtRGF0YS5hc3BpcmluZ0lkZWFEZXRhaWxzU3RlcD8uc3RhZ2UgfHwgZm9ybURhdGEuZm91bmRlckJ1c2luZXNzRGV0YWlsc1N0ZXA/LnN0YWdlIHx8ICcnLFxyXG4gICAgICB0ZWFtX3NpemU6IGZvcm1EYXRhLmFzcGlyaW5nSWRlYURldGFpbHNTdGVwPy50ZWFtIHx8IGZvcm1EYXRhLmZvdW5kZXJCdXNpbmVzc0RldGFpbHNTdGVwPy50ZWFtIHx8ICcnLFxyXG4gICAgICByZXZlbnVlX3N0YXR1czogZm9ybURhdGEuYXNwaXJpbmdJZGVhRGV0YWlsc1N0ZXA/LnJldmVudWUgfHwgZm9ybURhdGEuZm91bmRlckJ1c2luZXNzRGV0YWlsc1N0ZXA/LnJldmVudWUgfHwgJycsXHJcbiAgICAgIHRhcmdldF9hdWRpZW5jZTogZm9ybURhdGEuYXNwaXJpbmdJZGVhRGV0YWlsc1N0ZXA/LnRhcmdldEF1ZGllbmNlIHx8IGZvcm1EYXRhLmZvdW5kZXJCdXNpbmVzc0RldGFpbHNTdGVwPy50YXJnZXRBdWRpZW5jZSB8fCAnJyxcclxuICAgICAgYnVzaW5lc3NfbW9kZWw6IGZvcm1EYXRhLmFzcGlyaW5nSWRlYURldGFpbHNTdGVwPy5idXNpbmVzc01vZGVsIHx8IGZvcm1EYXRhLmZvdW5kZXJCdXNpbmVzc0RldGFpbHNTdGVwPy5idXNpbmVzc01vZGVsIHx8ICcnLFxyXG4gICAgICBhY2hpZXZlbWVudHM6IGZvcm1EYXRhLmFzcGlyaW5nSWRlYURldGFpbHNTdGVwPy5hY2hpZXZlbWVudHMgfHwgZm9ybURhdGEuZm91bmRlckJ1c2luZXNzRGV0YWlsc1N0ZXA/LmFjaGlldmVtZW50cyB8fCAnJyxcclxuICAgICAgXHJcbiAgICAgIC8vIEludGVyZXN0c1xyXG4gICAgICBpbnRlcmVzdHM6IGZvcm1EYXRhLmFzcGlyaW5nSW50ZXJlc3RzIHx8IGZvcm1EYXRhLmZvdW5kZXJJbnRlcmVzdHMgfHwgW10sXHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGFsbGVuZ2VzIGFuZCBhcHByb2FjaGVzXHJcbiAgICAgIGNoYWxsZW5nZXM6IGZvcm1EYXRhLmFzcGlyaW5nQ2hhbGxlbmdlcyB8fCBmb3JtRGF0YS5mb3VuZGVyQ2hhbGxlbmdlcyB8fCBbXSxcclxuICAgICAgYXBwcm9hY2hlczogZm9ybURhdGEuYXNwaXJpbmdBcHByb2FjaGVzIHx8IGZvcm1EYXRhLmZvdW5kZXJBcHByb2FjaGVzIHx8IFtdLFxyXG4gICAgICBwbGF0Zm9ybV9uYW1lOiBmb3JtRGF0YS5hc3BpcmluZ1BsYXRmb3JtTmFtZSB8fCBmb3JtRGF0YS5mb3VuZGVyUGxhdGZvcm1OYW1lIHx8ICcnLFxyXG4gICAgICBzYXRpc2ZhY3Rpb25fbGV2ZWw6IGZvcm1EYXRhLmFzcGlyaW5nU2F0aXNmYWN0aW9uIHx8IGZvcm1EYXRhLmZvdW5kZXJTYXRpc2ZhY3Rpb24gfHwgJycsXHJcbiAgICAgIFxyXG4gICAgICAvLyBHb2FscyBhbmQgdGltZWxpbmVcclxuICAgICAgdGltZWxpbmU6IGZvcm1EYXRhLmFzcGlyaW5nVGltZWxpbmUgfHwgZm9ybURhdGEuZm91bmRlclRpbWVsaW5lIHx8ICcnLFxyXG4gICAgICBsb29raW5nX2ZvcjogZm9ybURhdGEuYXNwaXJpbmdMb29raW5nRm9yIHx8IGZvcm1EYXRhLmZvdW5kZXJMb29raW5nRm9yIHx8IFtdLFxyXG4gICAgICBhc2NlbmR0aG9uX2ludGVyZXN0OiBmb3JtRGF0YS5hc3BpcmluZ0FzY2VuZFRob24gfHwgZm9ybURhdGEuZm91bmRlckFzY2VuZFRob24gfHwgJycsXHJcbiAgICAgIFxyXG4gICAgICAvLyBQYXN0IHN0YXJ0dXAgZXhwZXJpZW5jZSAoZm9yIGZvdW5kZXJzKVxyXG4gICAgICBwYXN0X3N0YXJ0dXBfc3RhZ2VzOiBmb3JtRGF0YS5mb3VuZGVyUGFzdFN0YXJ0dXBTdGFnZXMgfHwgW10sXHJcbiAgICAgIFxyXG4gICAgICAvLyBGaWxlIHVwbG9hZHNcclxuICAgICAgcGl0Y2hfZGVja19maWxlX25hbWU6IGZvcm1EYXRhLmFzcGlyaW5nUGl0Y2hEZWNrRmlsZT8ubmFtZSB8fCBmb3JtRGF0YS5mb3VuZGVyUGl0Y2hEZWNrRmlsZT8ubmFtZSB8fCAnJyxcclxuICAgICAgcGl0Y2hfZGVja19saW5rOiBmb3JtRGF0YS5hc3BpcmluZ1BpdGNoRGVja0xpbmsgfHwgZm9ybURhdGEuZm91bmRlclBpdGNoRGVja0xpbmsgfHwgJydcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5zZXJ0IGludG8gU3VwYWJhc2VcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwaXRjaF9zdWJtaXNzaW9ucycpXHJcbiAgICAgIC5pbnNlcnQoW3N1Ym1pc3Npb25EYXRhXSlcclxuICAgICAgLnNlbGVjdCgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdTdXBhYmFzZSBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0RhdGFiYXNlIGVycm9yOiAnICsgZXJyb3IubWVzc2FnZSB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICBtZXNzYWdlOiAnUGl0Y2ggc3VibWl0dGVkIHN1Y2Nlc3NmdWxseSEnLFxyXG4gICAgICAgIHN1Ym1pc3Npb25JZDogZGF0YVswXT8uaWQgXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxyXG4gICAgKTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSBlcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmVyIGVycm9yOiAnICsgZXJyb3IubWVzc2FnZSB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJzdXBhYmFzZSIsIlBPU1QiLCJyZXF1ZXN0IiwiZm9ybURhdGEiLCJqc29uIiwic3VibWlzc2lvbkRhdGEiLCJyb2xlIiwiZnVsbF9uYW1lIiwidXNlckRldGFpbHMiLCJmdWxsTmFtZSIsImVtYWlsIiwibW9iaWxlIiwiZWR1Y2F0aW9uYWxfZGVncmVlIiwiZWR1Y2F0aW9uYWxEZWdyZWUiLCJjb2xsZWdlIiwiY2l0eSIsImxpbmtlZGluIiwiaWRlYV9kZXNjcmlwdGlvbiIsImFzcGlyaW5nSWRlYURlc2NyaXB0aW9uIiwiYnVzaW5lc3NfZGVzY3JpcHRpb24iLCJmb3VuZGVyQnVzaW5lc3NEZXNjcmlwdGlvbiIsImN1cnJlbnRfc3RhZ2UiLCJhc3BpcmluZ0lkZWFEZXRhaWxzU3RlcCIsInN0YWdlIiwiZm91bmRlckJ1c2luZXNzRGV0YWlsc1N0ZXAiLCJ0ZWFtX3NpemUiLCJ0ZWFtIiwicmV2ZW51ZV9zdGF0dXMiLCJyZXZlbnVlIiwidGFyZ2V0X2F1ZGllbmNlIiwidGFyZ2V0QXVkaWVuY2UiLCJidXNpbmVzc19tb2RlbCIsImJ1c2luZXNzTW9kZWwiLCJhY2hpZXZlbWVudHMiLCJpbnRlcmVzdHMiLCJhc3BpcmluZ0ludGVyZXN0cyIsImZvdW5kZXJJbnRlcmVzdHMiLCJjaGFsbGVuZ2VzIiwiYXNwaXJpbmdDaGFsbGVuZ2VzIiwiZm91bmRlckNoYWxsZW5nZXMiLCJhcHByb2FjaGVzIiwiYXNwaXJpbmdBcHByb2FjaGVzIiwiZm91bmRlckFwcHJvYWNoZXMiLCJwbGF0Zm9ybV9uYW1lIiwiYXNwaXJpbmdQbGF0Zm9ybU5hbWUiLCJmb3VuZGVyUGxhdGZvcm1OYW1lIiwic2F0aXNmYWN0aW9uX2xldmVsIiwiYXNwaXJpbmdTYXRpc2ZhY3Rpb24iLCJmb3VuZGVyU2F0aXNmYWN0aW9uIiwidGltZWxpbmUiLCJhc3BpcmluZ1RpbWVsaW5lIiwiZm91bmRlclRpbWVsaW5lIiwibG9va2luZ19mb3IiLCJhc3BpcmluZ0xvb2tpbmdGb3IiLCJmb3VuZGVyTG9va2luZ0ZvciIsImFzY2VuZHRob25faW50ZXJlc3QiLCJhc3BpcmluZ0FzY2VuZFRob24iLCJmb3VuZGVyQXNjZW5kVGhvbiIsInBhc3Rfc3RhcnR1cF9zdGFnZXMiLCJmb3VuZGVyUGFzdFN0YXJ0dXBTdGFnZXMiLCJwaXRjaF9kZWNrX2ZpbGVfbmFtZSIsImFzcGlyaW5nUGl0Y2hEZWNrRmlsZSIsIm5hbWUiLCJmb3VuZGVyUGl0Y2hEZWNrRmlsZSIsInBpdGNoX2RlY2tfbGluayIsImFzcGlyaW5nUGl0Y2hEZWNrTGluayIsImZvdW5kZXJQaXRjaERlY2tMaW5rIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsImluc2VydCIsInNlbGVjdCIsImNvbnNvbGUiLCJzdWNjZXNzIiwibWVzc2FnZSIsInN0YXR1cyIsInN1Ym1pc3Npb25JZCIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/submit-pitch/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/supabaseClient.js":
/*!*******************************!*\
  !*** ./lib/supabaseClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = 'https://kabloexwblzmfztavxzs.supabase.co';\nconst supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthYmxvZXh3Ymx6bWZ6dGF2eHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5Njc3ODcsImV4cCI6MjA2NzU0Mzc4N30.z7TQR1fZtjI3ZqD7X64Az2yGTvYO4by_AyLhn1eBDeo';\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2VDbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUQ7QUFFckQsTUFBTUMsY0FBYztBQUNwQixNQUFNQyxrQkFBa0I7QUFFakIsTUFBTUMsV0FBV0gsbUVBQVlBLENBQUNDLGFBQWFDLGlCQUFpQiIsInNvdXJjZXMiOlsiRDpcXENvZGVzXFxJQU5leHRcXGlkZWEtYXNjZW5kXFxJQVJFUFxcbGliXFxzdXBhYmFzZUNsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuXG5jb25zdCBzdXBhYmFzZVVybCA9ICdodHRwczovL2thYmxvZXh3Ymx6bWZ6dGF2eHpzLnN1cGFiYXNlLmNvJztcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbXRoWW14dlpYaDNZbXg2YldaNmRHRjJlSHB6SWl3aWNtOXNaU0k2SW1GdWIyNGlMQ0pwWVhRaU9qRTNOVEU1TmpjM09EY3NJbVY0Y0NJNk1qQTJOelUwTXpjNE4zMC56N1RRUjFmWnRqSTNacUQ3WDY0QXoyeUdUdllPNGJ5X0F5TGhuMWVCRGVvJztcblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpOyJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInN1cGFiYXNlQW5vbktleSIsInN1cGFiYXNlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabaseClient.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsubmit-pitch%2Froute&page=%2Fapi%2Fsubmit-pitch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-pitch%2Froute.js&appDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsubmit-pitch%2Froute&page=%2Fapi%2Fsubmit-pitch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-pitch%2Froute.js&appDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Codes_IANext_idea_ascend_IAREP_app_api_submit_pitch_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/submit-pitch/route.js */ \"(rsc)/./app/api/submit-pitch/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/submit-pitch/route\",\n        pathname: \"/api/submit-pitch\",\n        filename: \"route\",\n        bundlePath: \"app/api/submit-pitch/route\"\n    },\n    resolvedPagePath: \"D:\\\\Codes\\\\IANext\\\\idea-ascend\\\\IAREP\\\\app\\\\api\\\\submit-pitch\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Codes_IANext_idea_ascend_IAREP_app_api_submit_pitch_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzdWJtaXQtcGl0Y2glMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN1Ym1pdC1waXRjaCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN1Ym1pdC1waXRjaCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDQ29kZXMlNUNJQU5leHQlNUNpZGVhLWFzY2VuZCU1Q0lBUkVQJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDQ29kZXMlNUNJQU5leHQlNUNpZGVhLWFzY2VuZCU1Q0lBUkVQJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN1QjtBQUNwRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcQ29kZXNcXFxcSUFOZXh0XFxcXGlkZWEtYXNjZW5kXFxcXElBUkVQXFxcXGFwcFxcXFxhcGlcXFxcc3VibWl0LXBpdGNoXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zdWJtaXQtcGl0Y2gvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdWJtaXQtcGl0Y2hcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3N1Ym1pdC1waXRjaC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXENvZGVzXFxcXElBTmV4dFxcXFxpZGVhLWFzY2VuZFxcXFxJQVJFUFxcXFxhcHBcXFxcYXBpXFxcXHN1Ym1pdC1waXRjaFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsubmit-pitch%2Froute&page=%2Fapi%2Fsubmit-pitch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-pitch%2Froute.js&appDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "?32c4":
/*!****************************!*\
  !*** bufferutil (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?66e9":
/*!********************************!*\
  !*** utf-8-validate (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/ws","vendor-chunks/whatwg-url","vendor-chunks/isows","vendor-chunks/tr46","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsubmit-pitch%2Froute&page=%2Fapi%2Fsubmit-pitch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-pitch%2Froute.js&appDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();