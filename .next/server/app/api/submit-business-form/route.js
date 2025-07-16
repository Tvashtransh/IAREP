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
exports.id = "app/api/submit-business-form/route";
exports.ids = ["app/api/submit-business-form/route"];
exports.modules = {

/***/ "(rsc)/./app/api/submit-business-form/route.js":
/*!***********************************************!*\
  !*** ./app/api/submit-business-form/route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabaseClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/supabaseClient.js */ \"(rsc)/./lib/supabaseClient.js\");\n\n\nasync function POST(request) {\n    try {\n        const formData = await request.json();\n        // Prepare data for database insertion\n        const submissionData = {\n            role: formData.selected || '',\n            // User details\n            full_name: formData.userDetails?.fullName || '',\n            email: formData.userDetails?.email || '',\n            mobile: formData.userDetails?.mobile || '',\n            educational_degree: formData.userDetails?.educationalDegree || '',\n            college: formData.userDetails?.college || '',\n            city: formData.userDetails?.city || '',\n            linkedin: formData.userDetails?.linkedin || '',\n            // Jobseeker fields\n            jobseeker_connect: formData.jobSeekerConnect || [],\n            jobseeker_collab: formData.jobSeekerCollab || [],\n            has_startup_exp: formData.hasStartupExp || '',\n            startup_exp_name: formData.startupExpDetails?.name || '',\n            startup_exp_role: formData.startupExpDetails?.role || '',\n            startup_exp_duration: formData.startupExpDetails?.duration || '',\n            startup_exp_value: formData.startupExpDetails?.value || '',\n            startup_exp_lacks: formData.startupExpDetails?.lacks || '',\n            open_to_startup: formData.openToStartup || '',\n            jobseeker_interests: formData.selectedInterests || [],\n            resume_file_name: formData.resumeFile?.name || '',\n            resume_link: formData.resumeLink || '',\n            resume_upload_method: formData.resumeUploadMethod || '',\n            jobseeker_roles: formData.jobSeekerRoles || '',\n            jobseeker_hopes: formData.jobSeekerHopes || '',\n            // Aspiring fields\n            aspiring_idea_name: formData.aspiringIdea?.name || '',\n            aspiring_idea_industry: formData.aspiringIdea?.industry || '',\n            aspiring_interests: formData.aspiringInterests || [],\n            aspiring_describe: formData.aspiringDetails?.describe || '',\n            aspiring_problem: formData.aspiringDetails?.problem || '',\n            aspiring_solution: formData.aspiringDetails?.solution || '',\n            aspiring_inspiration: formData.aspiringDetails?.inspiration || '',\n            aspiring_idea_description: formData.ideaDescription || '',\n            aspiring_stage: formData.ideaDetailsStep4?.stage || '',\n            aspiring_team: formData.ideaDetailsStep4?.team || '',\n            aspiring_revenue: formData.ideaDetailsStep4?.revenue || '',\n            aspiring_target_audience: formData.ideaDetailsStep4?.targetAudience || '',\n            aspiring_business_model: formData.ideaDetailsStep4?.businessModel || '',\n            aspiring_achievements: formData.ideaDetailsStep4?.achievements || '',\n            aspiring_duration: formData.aspiringDuration || '',\n            aspiring_validation: formData.aspiringValidation || '',\n            aspiring_prototype: formData.aspiringPrototype || '',\n            aspiring_motivation_step: formData.aspiringMotivationStep || '',\n            aspiring_goals_step: formData.aspiringGoalsStep || '',\n            aspiring_challenges: formData.aspiringChallenges || [],\n            aspiring_other_challenge: formData.aspiringOtherChallenge || '',\n            aspiring_frequency: formData.aspiringFrequency || '',\n            aspiring_approaches: formData.aspiringApproaches || [],\n            aspiring_platform_name: formData.aspiringPlatformName || '',\n            aspiring_satisfaction: formData.aspiringSatisfaction || '',\n            aspiring_product_link: formData.aspiringProductLink || '',\n            aspiring_has_business: formData.aspiringHasBusiness || '',\n            aspiring_pitch_deck_file_name: formData.aspiringPitchDeckFile?.name || '',\n            aspiring_pitch_deck_link: formData.aspiringPitchDeckLink || '',\n            aspiring_pitch_deck_upload_method: formData.aspiringPitchDeckUploadMethod || '',\n            aspiring_is_drag_over: formData.aspiringIsDragOver || false,\n            aspiring_timeline: formData.aspiringTimeline || '',\n            aspiring_looking_for: formData.aspiringLookingFor || [],\n            aspiring_ascendthon: formData.aspiringAscendThon || '',\n            // Founder fields\n            founder_idea_name: formData.founderIdea?.name || '',\n            founder_idea_industry: formData.founderIdea?.industry || '',\n            founder_interests: formData.founderInterests || [],\n            founder_stage: formData.founderStage || '',\n            founder_duration: formData.founderDuration || '',\n            founder_business_model: formData.founderBusinessModel || '',\n            founder_product_status: formData.founderProductStatus || '',\n            founder_product_link: formData.founderProductLink || '',\n            founder_challenges: formData.founderChallenges || [],\n            founder_other_challenge: formData.founderOtherChallenge || '',\n            founder_frequency: formData.founderFrequency || '',\n            founder_approaches: formData.founderApproaches || [],\n            founder_platform_name: formData.founderPlatformName || '',\n            founder_satisfaction: formData.founderSatisfaction || '',\n            founder_has_past_exp: formData.founderHasPastExp || '',\n            founder_past_exp_name: formData.founderPastExpDetails?.name || '',\n            founder_past_exp_role: formData.founderPastExpDetails?.role || '',\n            founder_past_exp_sector: formData.founderPastExpDetails?.sector || '',\n            founder_past_exp_stage: formData.founderPastExpDetails?.stage || '',\n            founder_team_status: formData.founderTeamStatus || '',\n            founder_missing_roles: formData.founderMissingRoles || '',\n            founder_team_confidence: formData.founderTeamConfidence || '',\n            founder_goals: formData.founderGoals || '',\n            founder_launch_plan: formData.founderLaunchPlan || '',\n            founder_funding: formData.founderFunding || '',\n            founder_personal_investment: formData.founderPersonalInvestment || '',\n            founder_investment_details: formData.founderInvestmentDetails || '',\n            founder_support: formData.founderSupport || [],\n            founder_support_other: formData.founderSupportOther || '',\n            founder_context: formData.founderContext || '',\n            founder_pitch_deck_file_name: formData.founderPitchDeckFile?.name || '',\n            founder_pitch_deck_link: formData.founderPitchDeckLink || '',\n            founder_pitch_deck_upload_method: formData.founderPitchDeckUploadMethod || '',\n            founder_is_drag_over: formData.founderIsDragOver || false,\n            founder_motivation_step: formData.founderMotivationStep || '',\n            founder_goals_step: formData.founderGoalsStep || '',\n            // General\n            form_step: formData.step || null\n        };\n        // Insert into Supabase\n        const { data, error } = await _lib_supabaseClient_js__WEBPACK_IMPORTED_MODULE_1__.supabase.from('business_form_submissions').insert([\n            submissionData\n        ]).select();\n        if (error) {\n            console.error('Supabase error:', error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: 'Database error: ' + error.message\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: 'Business form submitted successfully!',\n            submissionId: data[0]?.id\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('API error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: 'Server error: ' + error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N1Ym1pdC1idXNpbmVzcy1mb3JtL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNlO0FBRW5ELGVBQWVFLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUQsUUFBUUUsSUFBSTtRQUVuQyxzQ0FBc0M7UUFDdEMsTUFBTUMsaUJBQWlCO1lBQ3JCQyxNQUFNSCxTQUFTSSxRQUFRLElBQUk7WUFFM0IsZUFBZTtZQUNmQyxXQUFXTCxTQUFTTSxXQUFXLEVBQUVDLFlBQVk7WUFDN0NDLE9BQU9SLFNBQVNNLFdBQVcsRUFBRUUsU0FBUztZQUN0Q0MsUUFBUVQsU0FBU00sV0FBVyxFQUFFRyxVQUFVO1lBQ3hDQyxvQkFBb0JWLFNBQVNNLFdBQVcsRUFBRUsscUJBQXFCO1lBQy9EQyxTQUFTWixTQUFTTSxXQUFXLEVBQUVNLFdBQVc7WUFDMUNDLE1BQU1iLFNBQVNNLFdBQVcsRUFBRU8sUUFBUTtZQUNwQ0MsVUFBVWQsU0FBU00sV0FBVyxFQUFFUSxZQUFZO1lBRTVDLG1CQUFtQjtZQUNuQkMsbUJBQW1CZixTQUFTZ0IsZ0JBQWdCLElBQUksRUFBRTtZQUNsREMsa0JBQWtCakIsU0FBU2tCLGVBQWUsSUFBSSxFQUFFO1lBQ2hEQyxpQkFBaUJuQixTQUFTb0IsYUFBYSxJQUFJO1lBQzNDQyxrQkFBa0JyQixTQUFTc0IsaUJBQWlCLEVBQUVDLFFBQVE7WUFDdERDLGtCQUFrQnhCLFNBQVNzQixpQkFBaUIsRUFBRW5CLFFBQVE7WUFDdERzQixzQkFBc0J6QixTQUFTc0IsaUJBQWlCLEVBQUVJLFlBQVk7WUFDOURDLG1CQUFtQjNCLFNBQVNzQixpQkFBaUIsRUFBRU0sU0FBUztZQUN4REMsbUJBQW1CN0IsU0FBU3NCLGlCQUFpQixFQUFFUSxTQUFTO1lBQ3hEQyxpQkFBaUIvQixTQUFTZ0MsYUFBYSxJQUFJO1lBQzNDQyxxQkFBcUJqQyxTQUFTa0MsaUJBQWlCLElBQUksRUFBRTtZQUNyREMsa0JBQWtC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QUFpQixJQUFJO1lBQ3BEQyx5QkFBeUJwTCxTQUFTcUwscUJBQXFCLElBQUk7WUFDM0RDLG9CQUFvQnRMLFNBQVN1TCxnQkFBZ0IsSUFBSTtZQUVqRCxVQUFVO1lBQ1ZDLFdBQVd4TCxTQUFTeUwsSUFBSSxJQUFJO1FBQzlCO1FBRUEsdUJBQXVCO1FBQ3ZCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNOUwsNERBQVFBLENBQ25DK0wsSUFBSSxDQUFDLDZCQUNMQyxNQUFNLENBQUM7WUFBQzNMO1NBQWUsRUFDdkI0TCxNQUFNO1FBRVQsSUFBSUgsT0FBTztZQUNUSSxRQUFRSixLQUFLLENBQUMsbUJBQW1CQTtZQUNqQyxPQUFPL0wscURBQVlBLENBQUNLLElBQUksQ0FDdEI7Z0JBQUUrTCxTQUFTO2dCQUFPTCxPQUFPLHFCQUFxQkEsTUFBTU0sT0FBTztZQUFDLEdBQzVEO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxPQUFPdE0scURBQVlBLENBQUNLLElBQUksQ0FDdEI7WUFDRStMLFNBQVM7WUFDVEMsU0FBUztZQUNURSxjQUFjVCxJQUFJLENBQUMsRUFBRSxFQUFFVTtRQUN6QixHQUNBO1lBQUVGLFFBQVE7UUFBSTtJQUdsQixFQUFFLE9BQU9QLE9BQU87UUFDZEksUUFBUUosS0FBSyxDQUFDLGNBQWNBO1FBQzVCLE9BQU8vTCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtZQUFFK0wsU0FBUztZQUFPTCxPQUFPLG1CQUFtQkEsTUFBTU0sT0FBTztRQUFDLEdBQzFEO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJEOlxcQ29kZXNcXElBTmV4dFxcaWRlYS1hc2NlbmRcXElBUkVQXFxhcHBcXGFwaVxcc3VibWl0LWJ1c2luZXNzLWZvcm1cXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N1cGFiYXNlQ2xpZW50LmpzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgICAvLyBQcmVwYXJlIGRhdGEgZm9yIGRhdGFiYXNlIGluc2VydGlvblxuICAgIGNvbnN0IHN1Ym1pc3Npb25EYXRhID0ge1xuICAgICAgcm9sZTogZm9ybURhdGEuc2VsZWN0ZWQgfHwgJycsXG5cbiAgICAgIC8vIFVzZXIgZGV0YWlsc1xuICAgICAgZnVsbF9uYW1lOiBmb3JtRGF0YS51c2VyRGV0YWlscz8uZnVsbE5hbWUgfHwgJycsXG4gICAgICBlbWFpbDogZm9ybURhdGEudXNlckRldGFpbHM/LmVtYWlsIHx8ICcnLFxuICAgICAgbW9iaWxlOiBmb3JtRGF0YS51c2VyRGV0YWlscz8ubW9iaWxlIHx8ICcnLFxuICAgICAgZWR1Y2F0aW9uYWxfZGVncmVlOiBmb3JtRGF0YS51c2VyRGV0YWlscz8uZWR1Y2F0aW9uYWxEZWdyZWUgfHwgJycsXG4gICAgICBjb2xsZWdlOiBmb3JtRGF0YS51c2VyRGV0YWlscz8uY29sbGVnZSB8fCAnJyxcbiAgICAgIGNpdHk6IGZvcm1EYXRhLnVzZXJEZXRhaWxzPy5jaXR5IHx8ICcnLFxuICAgICAgbGlua2VkaW46IGZvcm1EYXRhLnVzZXJEZXRhaWxzPy5saW5rZWRpbiB8fCAnJyxcblxuICAgICAgLy8gSm9ic2Vla2VyIGZpZWxkc1xuICAgICAgam9ic2Vla2VyX2Nvbm5lY3Q6IGZvcm1EYXRhLmpvYlNlZWtlckNvbm5lY3QgfHwgW10sXG4gICAgICBqb2JzZWVrZXJfY29sbGFiOiBmb3JtRGF0YS5qb2JTZWVrZXJDb2xsYWIgfHwgW10sXG4gICAgICBoYXNfc3RhcnR1cF9leHA6IGZvcm1EYXRhLmhhc1N0YXJ0dXBFeHAgfHwgJycsXG4gICAgICBzdGFydHVwX2V4cF9uYW1lOiBmb3JtRGF0YS5zdGFydHVwRXhwRGV0YWlscz8ubmFtZSB8fCAnJyxcbiAgICAgIHN0YXJ0dXBfZXhwX3JvbGU6IGZvcm1EYXRhLnN0YXJ0dXBFeHBEZXRhaWxzPy5yb2xlIHx8ICcnLFxuICAgICAgc3RhcnR1cF9leHBfZHVyYXRpb246IGZvcm1EYXRhLnN0YXJ0dXBFeHBEZXRhaWxzPy5kdXJhdGlvbiB8fCAnJyxcbiAgICAgIHN0YXJ0dXBfZXhwX3ZhbHVlOiBmb3JtRGF0YS5zdGFydHVwRXhwRGV0YWlscz8udmFsdWUgfHwgJycsXG4gICAgICBzdGFydHVwX2V4cF9sYWNrczogZm9ybURhdGEuc3RhcnR1cEV4cERldGFpbHM/LmxhY2tzIHx8ICcnLFxuICAgICAgb3Blbl90b19zdGFydHVwOiBmb3JtRGF0YS5vcGVuVG9TdGFydHVwIHx8ICcnLFxuICAgICAgam9ic2Vla2VyX2ludGVyZXN0czogZm9ybURhdGEuc2VsZWN0ZWRJbnRlcmVzdHMgfHwgW10sXG4gICAgICByZXN1bWVfZmlsZV9uYW1lOiBmb3JtRGF0YS5yZXN1bWVGaWxlPy5uYW1lIHx8ICcnLFxuICAgICAgcmVzdW1lX2xpbms6IGZvcm1EYXRhLnJlc3VtZUxpbmsgfHwgJycsXG4gICAgICByZXN1bWVfdXBsb2FkX21ldGhvZDogZm9ybURhdGEucmVzdW1lVXBsb2FkTWV0aG9kIHx8ICcnLFxuICAgICAgam9ic2Vla2VyX3JvbGVzOiBmb3JtRGF0YS5qb2JTZWVrZXJSb2xlcyB8fCAnJyxcbiAgICAgIGpvYnNlZWtlcl9ob3BlczogZm9ybURhdGEuam9iU2Vla2VySG9wZXMgfHwgJycsXG5cbiAgICAgIC8vIEFzcGlyaW5nIGZpZWxkc1xuICAgICAgYXNwaXJpbmdfaWRlYV9uYW1lOiBmb3JtRGF0YS5hc3BpcmluZ0lkZWE/Lm5hbWUgfHwgJycsXG4gICAgICBhc3BpcmluZ19pZGVhX2luZHVzdHJ5OiBmb3JtRGF0YS5hc3BpcmluZ0lkZWE/LmluZHVzdHJ5IHx8ICcnLFxuICAgICAgYXNwaXJpbmdfaW50ZXJlc3RzOiBmb3JtRGF0YS5hc3BpcmluZ0ludGVyZXN0cyB8fCBbXSxcbiAgICAgIGFzcGlyaW5nX2Rlc2NyaWJlOiBmb3JtRGF0YS5hc3BpcmluZ0RldGFpbHM/LmRlc2NyaWJlIHx8ICcnLFxuICAgICAgYXNwaXJpbmdfcHJvYmxlbTogZm9ybURhdGEuYXNwaXJpbmdEZXRhaWxzPy5wcm9ibGVtIHx8ICcnLFxuICAgICAgYXNwaXJpbmdfc29sdXRpb246IGZvcm1EYXRhLmFzcGlyaW5nRGV0YWlscz8uc29sdXRpb24gfHwgJycsXG4gICAgICBhc3BpcmluZ19pbnNwaXJhdGlvbjogZm9ybURhdGEuYXNwaXJpbmdEZXRhaWxzPy5pbnNwaXJhdGlvbiB8fCAnJyxcbiAgICAgIGFzcGlyaW5nX2lkZWFfZGVzY3JpcHRpb246IGZvcm1EYXRhLmlkZWFEZXNjcmlwdGlvbiB8fCAnJyxcbiAgICAgIGFzcGlyaW5nX3N0YWdlOiBmb3JtRGF0YS5pZGVhRGV0YWlsc1N0ZXA0Py5zdGFnZSB8fCAnJyxcbiAgICAgIGFzcGlyaW5nX3RlYW06IGZvcm1EYXRhLmlkZWFEZXRhaWxzU3RlcDQ/LnRlYW0gfHwgJycsXG4gICAgICBhc3BpcmluZ19yZXZlbnVlOiBmb3JtRGF0YS5pZGVhRGV0YWlsc1N0ZXA0Py5yZXZlbnVlIHx8ICcnLFxuICAgICAgYXNwaXJpbmdfdGFyZ2V0X2F1ZGllbmNlOiBmb3JtRGF0YS5pZGVhRGV0YWlsc1N0ZXA0Py50YXJnZXRBdWRpZW5jZSB8fCAnJyxcbiAgICAgIGFzcGlyaW5nX2J1c2luZXNzX21vZGVsOiBmb3JtRGF0YS5pZGVhRGV0YWlsc1N0ZXA0Py5idXNpbmVzc01vZGVsIHx8ICcnLFxuICAgICAgYXNwaXJpbmdfYWNoaWV2ZW1lbnRzOiBmb3JtRGF0YS5pZGVhRGV0YWlsc1N0ZXA0Py5hY2hpZXZlbWVudHMgfHwgJycsXG4gICAgICBhc3BpcmluZ19kdXJhdGlvbjogZm9ybURhdGEuYXNwaXJpbmdEdXJhdGlvbiB8fCAnJyxcbiAgICAgIGFzcGlyaW5nX3ZhbGlkYXRpb246IGZvcm1EYXRhLmFzcGlyaW5nVmFsaWRhdGlvbiB8fCAnJyxcbiAgICAgIGFzcGlyaW5nX3Byb3RvdHlwZTogZm9ybURhdGEuYXNwaXJpbmdQcm90b3R5cGUgfHwgJycsXG4gICAgICBhc3BpcmluZ19tb3RpdmF0aW9uX3N0ZXA6IGZvcm1EYXRhLmFzcGlyaW5nTW90aXZhdGlvblN0ZXAgfHwgJycsXG4gICAgICBhc3BpcmluZ19nb2Fsc19zdGVwOiBmb3JtRGF0YS5hc3BpcmluZ0dvYWxzU3RlcCB8fCAnJyxcbiAgICAgIGFzcGlyaW5nX2NoYWxsZW5nZXM6IGZvcm1EYXRhLmFzcGlyaW5nQ2hhbGxlbmdlcyB8fCBbXSxcbiAgICAgIGFzcGlyaW5nX290aGVyX2NoYWxsZW5nZTogZm9ybURhdGEuYXNwaXJpbmdPdGhlckNoYWxsZW5nZSB8fCAnJyxcbiAgICAgIGFzcGlyaW5nX2ZyZXF1ZW5jeTogZm9ybURhdGEuYXNwaXJpbmdGcmVxdWVuY3kgfHwgJycsXG4gICAgICBhc3BpcmluZ19hcHByb2FjaGVzOiBmb3JtRGF0YS5hc3BpcmluZ0FwcHJvYWNoZXMgfHwgW10sXG4gICAgICBhc3BpcmluZ19wbGF0Zm9ybV9uYW1lOiBmb3JtRGF0YS5hc3BpcmluZ1BsYXRmb3JtTmFtZSB8fCAnJyxcbiAgICAgIGFzcGlyaW5nX3NhdGlzZmFjdGlvbjogZm9ybURhdGEuYXNwaXJpbmdTYXRpc2ZhY3Rpb24gfHwgJycsXG4gICAgICBhc3BpcmluZ19wcm9kdWN0X2xpbms6IGZvcm1EYXRhLmFzcGlyaW5nUHJvZHVjdExpbmsgfHwgJycsXG4gICAgICBhc3BpcmluZ19oYXNfYnVzaW5lc3M6IGZvcm1EYXRhLmFzcGlyaW5nSGFzQnVzaW5lc3MgfHwgJycsXG4gICAgICBhc3BpcmluZ19waXRjaF9kZWNrX2ZpbGVfbmFtZTogZm9ybURhdGEuYXNwaXJpbmdQaXRjaERlY2tGaWxlPy5uYW1lIHx8ICcnLFxuICAgICAgYXNwaXJpbmdfcGl0Y2hfZGVja19saW5rOiBmb3JtRGF0YS5hc3BpcmluZ1BpdGNoRGVja0xpbmsgfHwgJycsXG4gICAgICBhc3BpcmluZ19waXRjaF9kZWNrX3VwbG9hZF9tZXRob2Q6IGZvcm1EYXRhLmFzcGlyaW5nUGl0Y2hEZWNrVXBsb2FkTWV0aG9kIHx8ICcnLFxuICAgICAgYXNwaXJpbmdfaXNfZHJhZ19vdmVyOiBmb3JtRGF0YS5hc3BpcmluZ0lzRHJhZ092ZXIgfHwgZmFsc2UsXG4gICAgICBhc3BpcmluZ190aW1lbGluZTogZm9ybURhdGEuYXNwaXJpbmdUaW1lbGluZSB8fCAnJyxcbiAgICAgIGFzcGlyaW5nX2xvb2tpbmdfZm9yOiBmb3JtRGF0YS5hc3BpcmluZ0xvb2tpbmdGb3IgfHwgW10sXG4gICAgICBhc3BpcmluZ19hc2NlbmR0aG9uOiBmb3JtRGF0YS5hc3BpcmluZ0FzY2VuZFRob24gfHwgJycsXG5cbiAgICAgIC8vIEZvdW5kZXIgZmllbGRzXG4gICAgICBmb3VuZGVyX2lkZWFfbmFtZTogZm9ybURhdGEuZm91bmRlcklkZWE/Lm5hbWUgfHwgJycsXG4gICAgICBmb3VuZGVyX2lkZWFfaW5kdXN0cnk6IGZvcm1EYXRhLmZvdW5kZXJJZGVhPy5pbmR1c3RyeSB8fCAnJyxcbiAgICAgIGZvdW5kZXJfaW50ZXJlc3RzOiBmb3JtRGF0YS5mb3VuZGVySW50ZXJlc3RzIHx8IFtdLFxuICAgICAgZm91bmRlcl9zdGFnZTogZm9ybURhdGEuZm91bmRlclN0YWdlIHx8ICcnLFxuICAgICAgZm91bmRlcl9kdXJhdGlvbjogZm9ybURhdGEuZm91bmRlckR1cmF0aW9uIHx8ICcnLFxuICAgICAgZm91bmRlcl9idXNpbmVzc19tb2RlbDogZm9ybURhdGEuZm91bmRlckJ1c2luZXNzTW9kZWwgfHwgJycsXG4gICAgICBmb3VuZGVyX3Byb2R1Y3Rfc3RhdHVzOiBmb3JtRGF0YS5mb3VuZGVyUHJvZHVjdFN0YXR1cyB8fCAnJyxcbiAgICAgIGZvdW5kZXJfcHJvZHVjdF9saW5rOiBmb3JtRGF0YS5mb3VuZGVyUHJvZHVjdExpbmsgfHwgJycsXG4gICAgICBmb3VuZGVyX2NoYWxsZW5nZXM6IGZvcm1EYXRhLmZvdW5kZXJDaGFsbGVuZ2VzIHx8IFtdLFxuICAgICAgZm91bmRlcl9vdGhlcl9jaGFsbGVuZ2U6IGZvcm1EYXRhLmZvdW5kZXJPdGhlckNoYWxsZW5nZSB8fCAnJyxcbiAgICAgIGZvdW5kZXJfZnJlcXVlbmN5OiBmb3JtRGF0YS5mb3VuZGVyRnJlcXVlbmN5IHx8ICcnLFxuICAgICAgZm91bmRlcl9hcHByb2FjaGVzOiBmb3JtRGF0YS5mb3VuZGVyQXBwcm9hY2hlcyB8fCBbXSxcbiAgICAgIGZvdW5kZXJfcGxhdGZvcm1fbmFtZTogZm9ybURhdGEuZm91bmRlclBsYXRmb3JtTmFtZSB8fCAnJyxcbiAgICAgIGZvdW5kZXJfc2F0aXNmYWN0aW9uOiBmb3JtRGF0YS5mb3VuZGVyU2F0aXNmYWN0aW9uIHx8ICcnLFxuICAgICAgZm91bmRlcl9oYXNfcGFzdF9leHA6IGZvcm1EYXRhLmZvdW5kZXJIYXNQYXN0RXhwIHx8ICcnLFxuICAgICAgZm91bmRlcl9wYXN0X2V4cF9uYW1lOiBmb3JtRGF0YS5mb3VuZGVyUGFzdEV4cERldGFpbHM/Lm5hbWUgfHwgJycsXG4gICAgICBmb3VuZGVyX3Bhc3RfZXhwX3JvbGU6IGZvcm1EYXRhLmZvdW5kZXJQYXN0RXhwRGV0YWlscz8ucm9sZSB8fCAnJyxcbiAgICAgIGZvdW5kZXJfcGFzdF9leHBfc2VjdG9yOiBmb3JtRGF0YS5mb3VuZGVyUGFzdEV4cERldGFpbHM/LnNlY3RvciB8fCAnJyxcbiAgICAgIGZvdW5kZXJfcGFzdF9leHBfc3RhZ2U6IGZvcm1EYXRhLmZvdW5kZXJQYXN0RXhwRGV0YWlscz8uc3RhZ2UgfHwgJycsXG4gICAgICBmb3VuZGVyX3RlYW1fc3RhdHVzOiBmb3JtRGF0YS5mb3VuZGVyVGVhbVN0YXR1cyB8fCAnJyxcbiAgICAgIGZvdW5kZXJfbWlzc2luZ19yb2xlczogZm9ybURhdGEuZm91bmRlck1pc3NpbmdSb2xlcyB8fCAnJyxcbiAgICAgIGZvdW5kZXJfdGVhbV9jb25maWRlbmNlOiBmb3JtRGF0YS5mb3VuZGVyVGVhbUNvbmZpZGVuY2UgfHwgJycsXG4gICAgICBmb3VuZGVyX2dvYWxzOiBmb3JtRGF0YS5mb3VuZGVyR29hbHMgfHwgJycsXG4gICAgICBmb3VuZGVyX2xhdW5jaF9wbGFuOiBmb3JtRGF0YS5mb3VuZGVyTGF1bmNoUGxhbiB8fCAnJyxcbiAgICAgIGZvdW5kZXJfZnVuZGluZzogZm9ybURhdGEuZm91bmRlckZ1bmRpbmcgfHwgJycsXG4gICAgICBmb3VuZGVyX3BlcnNvbmFsX2ludmVzdG1lbnQ6IGZvcm1EYXRhLmZvdW5kZXJQZXJzb25hbEludmVzdG1lbnQgfHwgJycsXG4gICAgICBmb3VuZGVyX2ludmVzdG1lbnRfZGV0YWlsczogZm9ybURhdGEuZm91bmRlckludmVzdG1lbnREZXRhaWxzIHx8ICcnLFxuICAgICAgZm91bmRlcl9zdXBwb3J0OiBmb3JtRGF0YS5mb3VuZGVyU3VwcG9ydCB8fCBbXSxcbiAgICAgIGZvdW5kZXJfc3VwcG9ydF9vdGhlcjogZm9ybURhdGEuZm91bmRlclN1cHBvcnRPdGhlciB8fCAnJyxcbiAgICAgIGZvdW5kZXJfY29udGV4dDogZm9ybURhdGEuZm91bmRlckNvbnRleHQgfHwgJycsXG4gICAgICBmb3VuZGVyX3BpdGNoX2RlY2tfZmlsZV9uYW1lOiBmb3JtRGF0YS5mb3VuZGVyUGl0Y2hEZWNrRmlsZT8ubmFtZSB8fCAnJyxcbiAgICAgIGZvdW5kZXJfcGl0Y2hfZGVja19saW5rOiBmb3JtRGF0YS5mb3VuZGVyUGl0Y2hEZWNrTGluayB8fCAnJyxcbiAgICAgIGZvdW5kZXJfcGl0Y2hfZGVja191cGxvYWRfbWV0aG9kOiBmb3JtRGF0YS5mb3VuZGVyUGl0Y2hEZWNrVXBsb2FkTWV0aG9kIHx8ICcnLFxuICAgICAgZm91bmRlcl9pc19kcmFnX292ZXI6IGZvcm1EYXRhLmZvdW5kZXJJc0RyYWdPdmVyIHx8IGZhbHNlLFxuICAgICAgZm91bmRlcl9tb3RpdmF0aW9uX3N0ZXA6IGZvcm1EYXRhLmZvdW5kZXJNb3RpdmF0aW9uU3RlcCB8fCAnJyxcbiAgICAgIGZvdW5kZXJfZ29hbHNfc3RlcDogZm9ybURhdGEuZm91bmRlckdvYWxzU3RlcCB8fCAnJyxcblxuICAgICAgLy8gR2VuZXJhbFxuICAgICAgZm9ybV9zdGVwOiBmb3JtRGF0YS5zdGVwIHx8IG51bGxcbiAgICB9O1xuXG4gICAgLy8gSW5zZXJ0IGludG8gU3VwYWJhc2VcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oJ2J1c2luZXNzX2Zvcm1fc3VibWlzc2lvbnMnKVxuICAgICAgLmluc2VydChbc3VibWlzc2lvbkRhdGFdKVxuICAgICAgLnNlbGVjdCgpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdTdXBhYmFzZSBlcnJvcjonLCBlcnJvcik7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRGF0YWJhc2UgZXJyb3I6ICcgKyBlcnJvci5tZXNzYWdlIH0sXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IFxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcbiAgICAgICAgbWVzc2FnZTogJ0J1c2luZXNzIGZvcm0gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseSEnLFxuICAgICAgICBzdWJtaXNzaW9uSWQ6IGRhdGFbMF0/LmlkIFxuICAgICAgfSxcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxuICAgICk7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBUEkgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmVyIGVycm9yOiAnICsgZXJyb3IubWVzc2FnZSB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwic3VwYWJhc2UiLCJQT1NUIiwicmVxdWVzdCIsImZvcm1EYXRhIiwianNvbiIsInN1Ym1pc3Npb25EYXRhIiwicm9sZSIsInNlbGVjdGVkIiwiZnVsbF9uYW1lIiwidXNlckRldGFpbHMiLCJmdWxsTmFtZSIsImVtYWlsIiwibW9iaWxlIiwiZWR1Y2F0aW9uYWxfZGVncmVlIiwiZWR1Y2F0aW9uYWxEZWdyZWUiLCJjb2xsZWdlIiwiY2l0eSIsImxpbmtlZGluIiwiam9ic2Vla2VyX2Nvbm5lY3QiLCJqb2JTZWVrZXJDb25uZWN0Iiwiam9ic2Vla2VyX2NvbGxhYiIsImpvYlNlZWtlckNvbGxhYiIsImhhc19zdGFydHVwX2V4cCIsImhhc1N0YXJ0dXBFeHAiLCJzdGFydHVwX2V4cF9uYW1lIiwic3RhcnR1cEV4cERldGFpbHMiLCJuYW1lIiwic3RhcnR1cF9leHBfcm9sZSIsInN0YXJ0dXBfZXhwX2R1cmF0aW9uIiwiZHVyYXRpb24iLCJzdGFydHVwX2V4cF92YWx1ZSIsInZhbHVlIiwic3RhcnR1cF9leHBfbGFja3MiLCJsYWNrcyIsIm9wZW5fdG9fc3RhcnR1cCIsIm9wZW5Ub1N0YXJ0dXAiLCJqb2JzZWVrZXJfaW50ZXJlc3RzIiwic2VsZWN0ZWRJbnRlcmVzdHMiLCJyZXN1bWVfZmlsZV9uYW1lIiwicmVzdW1lRmlsZSIsInJlc3VtZV9saW5rIiwicmVzdW1lTGluayIsInJlc3VtZV91cGxvYWRfbWV0aG9kIiwicmVzdW1lVXBsb2FkTWV0aG9kIiwiam9ic2Vla2VyX3JvbGVzIiwiam9iU2Vla2VyUm9sZXMiLCJqb2JzZWVrZXJfaG9wZXMiLCJqb2JTZWVrZXJIb3BlcyIsImFzcGlyaW5nX2lkZWFfbmFtZSIsImFzcGlyaW5nSWRlYSIsImFzcGlyaW5nX2lkZWFfaW5kdXN0cnkiLCJpbmR1c3RyeSIsImFzcGlyaW5nX2ludGVyZXN0cyIsImFzcGlyaW5nSW50ZXJlc3RzIiwiYXNwaXJpbmdfZGVzY3JpYmUiLCJhc3BpcmluZ0RldGFpbHMiLCJkZXNjcmliZSIsImFzcGlyaW5nX3Byb2JsZW0iLCJwcm9ibGVtIiwiYXNwaXJpbmdfc29sdXRpb24iLCJzb2x1dGlvbiIsImFzcGlyaW5nX2luc3BpcmF0aW9uIiwiaW5zcGlyYXRpb24iLCJhc3BpcmluZ19pZGVhX2Rlc2NyaXB0aW9uIiwiaWRlYURlc2NyaXB0aW9uIiwiYXNwaXJpbmdfc3RhZ2UiLCJpZGVhRGV0YWlsc1N0ZXA0Iiwic3RhZ2UiLCJhc3BpcmluZ190ZWFtIiwidGVhbSIsImFzcGlyaW5nX3JldmVudWUiLCJyZXZlbnVlIiwiYXNwaXJpbmdfdGFyZ2V0X2F1ZGllbmNlIiwidGFyZ2V0QXVkaWVuY2UiLCJhc3BpcmluZ19idXNpbmVzc19tb2RlbCIsImJ1c2luZXNzTW9kZWwiLCJhc3BpcmluZ19hY2hpZXZlbWVudHMiLCJhY2hpZXZlbWVudHMiLCJhc3BpcmluZ19kdXJhdGlvbiIsImFzcGlyaW5nRHVyYXRpb24iLCJhc3BpcmluZ192YWxpZGF0aW9uIiwiYXNwaXJpbmdWYWxpZGF0aW9uIiwiYXNwaXJpbmdfcHJvdG90eXBlIiwiYXNwaXJpbmdQcm90b3R5cGUiLCJhc3BpcmluZ19tb3RpdmF0aW9uX3N0ZXAiLCJhc3BpcmluZ01vdGl2YXRpb25TdGVwIiwiYXNwaXJpbmdfZ29hbHNfc3RlcCIsImFzcGlyaW5nR29hbHNTdGVwIiwiYXNwaXJpbmdfY2hhbGxlbmdlcyIsImFzcGlyaW5nQ2hhbGxlbmdlcyIsImFzcGlyaW5nX290aGVyX2NoYWxsZW5nZSIsImFzcGlyaW5nT3RoZXJDaGFsbGVuZ2UiLCJhc3BpcmluZ19mcmVxdWVuY3kiLCJhc3BpcmluZ0ZyZXF1ZW5jeSIsImFzcGlyaW5nX2FwcHJvYWNoZXMiLCJhc3BpcmluZ0FwcHJvYWNoZXMiLCJhc3BpcmluZ19wbGF0Zm9ybV9uYW1lIiwiYXNwaXJpbmdQbGF0Zm9ybU5hbWUiLCJhc3BpcmluZ19zYXRpc2ZhY3Rpb24iLCJhc3BpcmluZ1NhdGlzZmFjdGlvbiIsImFzcGlyaW5nX3Byb2R1Y3RfbGluayIsImFzcGlyaW5nUHJvZHVjdExpbmsiLCJhc3BpcmluZ19oYXNfYnVzaW5lc3MiLCJhc3BpcmluZ0hhc0J1c2luZXNzIiwiYXNwaXJpbmdfcGl0Y2hfZGVja19maWxlX25hbWUiLCJhc3BpcmluZ1BpdGNoRGVja0ZpbGUiLCJhc3BpcmluZ19waXRjaF9kZWNrX2xpbmsiLCJhc3BpcmluZ1BpdGNoRGVja0xpbmsiLCJhc3BpcmluZ19waXRjaF9kZWNrX3VwbG9hZF9tZXRob2QiLCJhc3BpcmluZ1BpdGNoRGVja1VwbG9hZE1ldGhvZCIsImFzcGlyaW5nX2lzX2RyYWdfb3ZlciIsImFzcGlyaW5nSXNEcmFnT3ZlciIsImFzcGlyaW5nX3RpbWVsaW5lIiwiYXNwaXJpbmdUaW1lbGluZSIsImFzcGlyaW5nX2xvb2tpbmdfZm9yIiwiYXNwaXJpbmdMb29raW5nRm9yIiwiYXNwaXJpbmdfYXNjZW5kdGhvbiIsImFzcGlyaW5nQXNjZW5kVGhvbiIsImZvdW5kZXJfaWRlYV9uYW1lIiwiZm91bmRlcklkZWEiLCJmb3VuZGVyX2lkZWFfaW5kdXN0cnkiLCJmb3VuZGVyX2ludGVyZXN0cyIsImZvdW5kZXJJbnRlcmVzdHMiLCJmb3VuZGVyX3N0YWdlIiwiZm91bmRlclN0YWdlIiwiZm91bmRlcl9kdXJhdGlvbiIsImZvdW5kZXJEdXJhdGlvbiIsImZvdW5kZXJfYnVzaW5lc3NfbW9kZWwiLCJmb3VuZGVyQnVzaW5lc3NNb2RlbCIsImZvdW5kZXJfcHJvZHVjdF9zdGF0dXMiLCJmb3VuZGVyUHJvZHVjdFN0YXR1cyIsImZvdW5kZXJfcHJvZHVjdF9saW5rIiwiZm91bmRlclByb2R1Y3RMaW5rIiwiZm91bmRlcl9jaGFsbGVuZ2VzIiwiZm91bmRlckNoYWxsZW5nZXMiLCJmb3VuZGVyX290aGVyX2NoYWxsZW5nZSIsImZvdW5kZXJPdGhlckNoYWxsZW5nZSIsImZvdW5kZXJfZnJlcXVlbmN5IiwiZm91bmRlckZyZXF1ZW5jeSIsImZvdW5kZXJfYXBwcm9hY2hlcyIsImZvdW5kZXJBcHByb2FjaGVzIiwiZm91bmRlcl9wbGF0Zm9ybV9uYW1lIiwiZm91bmRlclBsYXRmb3JtTmFtZSIsImZvdW5kZXJfc2F0aXNmYWN0aW9uIiwiZm91bmRlclNhdGlzZmFjdGlvbiIsImZvdW5kZXJfaGFzX3Bhc3RfZXhwIiwiZm91bmRlckhhc1Bhc3RFeHAiLCJmb3VuZGVyX3Bhc3RfZXhwX25hbWUiLCJmb3VuZGVyUGFzdEV4cERldGFpbHMiLCJmb3VuZGVyX3Bhc3RfZXhwX3JvbGUiLCJmb3VuZGVyX3Bhc3RfZXhwX3NlY3RvciIsInNlY3RvciIsImZvdW5kZXJfcGFzdF9leHBfc3RhZ2UiLCJmb3VuZGVyX3RlYW1fc3RhdHVzIiwiZm91bmRlclRlYW1TdGF0dXMiLCJmb3VuZGVyX21pc3Npbmdfcm9sZXMiLCJmb3VuZGVyTWlzc2luZ1JvbGVzIiwiZm91bmRlcl90ZWFtX2NvbmZpZGVuY2UiLCJmb3VuZGVyVGVhbUNvbmZpZGVuY2UiLCJmb3VuZGVyX2dvYWxzIiwiZm91bmRlckdvYWxzIiwiZm91bmRlcl9sYXVuY2hfcGxhbiIsImZvdW5kZXJMYXVuY2hQbGFuIiwiZm91bmRlcl9mdW5kaW5nIiwiZm91bmRlckZ1bmRpbmciLCJmb3VuZGVyX3BlcnNvbmFsX2ludmVzdG1lbnQiLCJmb3VuZGVyUGVyc29uYWxJbnZlc3RtZW50IiwiZm91bmRlcl9pbnZlc3RtZW50X2RldGFpbHMiLCJmb3VuZGVySW52ZXN0bWVudERldGFpbHMiLCJmb3VuZGVyX3N1cHBvcnQiLCJmb3VuZGVyU3VwcG9ydCIsImZvdW5kZXJfc3VwcG9ydF9vdGhlciIsImZvdW5kZXJTdXBwb3J0T3RoZXIiLCJmb3VuZGVyX2NvbnRleHQiLCJmb3VuZGVyQ29udGV4dCIsImZvdW5kZXJfcGl0Y2hfZGVja19maWxlX25hbWUiLCJmb3VuZGVyUGl0Y2hEZWNrRmlsZSIsImZvdW5kZXJfcGl0Y2hfZGVja19saW5rIiwiZm91bmRlclBpdGNoRGVja0xpbmsiLCJmb3VuZGVyX3BpdGNoX2RlY2tfdXBsb2FkX21ldGhvZCIsImZvdW5kZXJQaXRjaERlY2tVcGxvYWRNZXRob2QiLCJmb3VuZGVyX2lzX2RyYWdfb3ZlciIsImZvdW5kZXJJc0RyYWdPdmVyIiwiZm91bmRlcl9tb3RpdmF0aW9uX3N0ZXAiLCJmb3VuZGVyTW90aXZhdGlvblN0ZXAiLCJmb3VuZGVyX2dvYWxzX3N0ZXAiLCJmb3VuZGVyR29hbHNTdGVwIiwiZm9ybV9zdGVwIiwic3RlcCIsImRhdGEiLCJlcnJvciIsImZyb20iLCJpbnNlcnQiLCJzZWxlY3QiLCJjb25zb2xlIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJzdWJtaXNzaW9uSWQiLCJpZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/submit-business-form/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/supabaseClient.js":
/*!*******************************!*\
  !*** ./lib/supabaseClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/../node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = \"https://nhcnszfagpcmsghwxjvb.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oY25zemZhZ3BjbXNnaHd4anZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1ODgwODUsImV4cCI6MjA2ODE2NDA4NX0.4PCJsR4K7dS1dJheepbYPEMGNvh9mRHakrhdYHbFj3Y\";\nif (!supabaseUrl || !supabaseAnonKey) {\n    throw new Error('Missing Supabase environment variables. Please check your .env.local file.');\n}\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey, {\n    auth: {\n        autoRefreshToken: true,\n        persistSession: true,\n        detectSessionInUrl: true\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2VDbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUQ7QUFFckQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGtCQUFrQkgsa05BQXlDO0FBRWpFLElBQUksQ0FBQ0QsZUFBZSxDQUFDSSxpQkFBaUI7SUFDcEMsTUFBTSxJQUFJRSxNQUFNO0FBQ2xCO0FBRU8sTUFBTUMsV0FBV1IsbUVBQVlBLENBQUNDLGFBQWFJLGlCQUFpQjtJQUNqRUksTUFBTTtRQUNKQyxrQkFBa0I7UUFDbEJDLGdCQUFnQjtRQUNoQkMsb0JBQW9CO0lBQ3RCO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsiRDpcXENvZGVzXFxJQU5leHRcXGlkZWEtYXNjZW5kXFxJQVJFUFxcbGliXFxzdXBhYmFzZUNsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTDtcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZO1xuXG5pZiAoIXN1cGFiYXNlVXJsIHx8ICFzdXBhYmFzZUFub25LZXkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFN1cGFiYXNlIGVudmlyb25tZW50IHZhcmlhYmxlcy4gUGxlYXNlIGNoZWNrIHlvdXIgLmVudi5sb2NhbCBmaWxlLicpO1xufVxuXG5leHBvcnQgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSwge1xuICBhdXRoOiB7XG4gICAgYXV0b1JlZnJlc2hUb2tlbjogdHJ1ZSxcbiAgICBwZXJzaXN0U2Vzc2lvbjogdHJ1ZSxcbiAgICBkZXRlY3RTZXNzaW9uSW5Vcmw6IHRydWVcbiAgfVxufSk7ICJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsIkVycm9yIiwic3VwYWJhc2UiLCJhdXRoIiwiYXV0b1JlZnJlc2hUb2tlbiIsInBlcnNpc3RTZXNzaW9uIiwiZGV0ZWN0U2Vzc2lvbkluVXJsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabaseClient.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsubmit-business-form%2Froute&page=%2Fapi%2Fsubmit-business-form%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-business-form%2Froute.js&appDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsubmit-business-form%2Froute&page=%2Fapi%2Fsubmit-business-form%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-business-form%2Froute.js&appDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Codes_IANext_idea_ascend_IAREP_app_api_submit_business_form_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/submit-business-form/route.js */ \"(rsc)/./app/api/submit-business-form/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/submit-business-form/route\",\n        pathname: \"/api/submit-business-form\",\n        filename: \"route\",\n        bundlePath: \"app/api/submit-business-form/route\"\n    },\n    resolvedPagePath: \"D:\\\\Codes\\\\IANext\\\\idea-ascend\\\\IAREP\\\\app\\\\api\\\\submit-business-form\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Codes_IANext_idea_ascend_IAREP_app_api_submit_business_form_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzdWJtaXQtYnVzaW5lc3MtZm9ybSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc3VibWl0LWJ1c2luZXNzLWZvcm0lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzdWJtaXQtYnVzaW5lc3MtZm9ybSUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDQ29kZXMlNUNJQU5leHQlNUNpZGVhLWFzY2VuZCU1Q0lBUkVQJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDQ29kZXMlNUNJQU5leHQlNUNpZGVhLWFzY2VuZCU1Q0lBUkVQJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMrQjtBQUM1RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcQ29kZXNcXFxcSUFOZXh0XFxcXGlkZWEtYXNjZW5kXFxcXElBUkVQXFxcXGFwcFxcXFxhcGlcXFxcc3VibWl0LWJ1c2luZXNzLWZvcm1cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N1Ym1pdC1idXNpbmVzcy1mb3JtL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc3VibWl0LWJ1c2luZXNzLWZvcm1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3N1Ym1pdC1idXNpbmVzcy1mb3JtL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcQ29kZXNcXFxcSUFOZXh0XFxcXGlkZWEtYXNjZW5kXFxcXElBUkVQXFxcXGFwcFxcXFxhcGlcXFxcc3VibWl0LWJ1c2luZXNzLWZvcm1cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsubmit-business-form%2Froute&page=%2Fapi%2Fsubmit-business-form%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-business-form%2Froute.js&appDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "?7f96":
/*!********************************!*\
  !*** utf-8-validate (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d1cc":
/*!****************************!*\
  !*** bufferutil (ignored) ***!
  \****************************/
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/ws","vendor-chunks/whatwg-url","vendor-chunks/isows","vendor-chunks/tr46","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsubmit-business-form%2Froute&page=%2Fapi%2Fsubmit-business-form%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-business-form%2Froute.js&appDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCodes%5CIANext%5Cidea-ascend%5CIAREP&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();